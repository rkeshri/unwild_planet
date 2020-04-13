import React,{Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      query: "",
      tags: [],
      searchValue:'1212'
    };
    //this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange = (e) => {
    console.log("===="+e.target.value+'===value=='+e.target.name)
    // const val =e.target.value
    // this.setState({
    //   searchValue: val
    // }, () => {
      this.getInfo(e.target.value)
      // This will output an array of objects
      // given by Autocompelte options property.
      //console.log(this.state.data);
    // });
  }

  getInfo = (data) => {
   console.log("data========"+data)
    const that = this;
    if (this.count === 0) {
      axios
        .get(
          "https://us-autocomplete.api.smartystreets.com/suggest?auth-id=21102174564513388&prefix=1211%20South%20Co")
        .then(response => {
          if (response.data.suggestions.length > 0) {
            console.log("====="+JSON.stringify(response.data.suggestions.null,4))
            this.setState({ tags: response.data.suggestions });
          }
        })

        .catch(function(error) {
          console.log("In error" + error);
          that.setState({ failureMessage: "Please try after some time" });
        });
      this.count++;
    }
    // else{

    // }
  };

  

  render() {
    const top100Films = this.state.tags;
    return (
      <React.Fragment>
        {/* <Autocomplete
         id="combo-box-demo"        
          options={top100Films}
          getOptionLabel={option => option.city}
          // defaultValue={[top100Films[13]]}
          value = {this.state.searchValue}
          onBlur={e=>this.onTagsChange(e)}
          renderInput={(params)=> (<TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
              margin="normal"
              fullWidth
            />
    )}
        /> */}

<Autocomplete
        freeSolo
        id="combo-box-demo"      
        disableClearable
        options={top100Films.map((option) => option.city)}
        onBlur={e=>this.onTagsChange(e)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search "
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      </React.Fragment>
    );
  }
}

export default Search;
