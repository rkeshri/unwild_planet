import React, { Component } from "react";
import DatePicker from "react-date-picker";
import Select from "react-select";
import axios from 'axios';
import Search from '../../common/search'

export default class ToGoComponent extends Component {
  constructor(props) {
    super(props);
    this.count=0;
    this.state = {
      date: new Date(),
      selectedOption: null,
      optionsData:[]
    };
  }

  onChange = date => this.setState({ date });
  handleChange = selectedOption => {
    this.setState({ selectedOption },()=>{
        this.SearchData(selectedOption);
    });
    console.log(`Option selected:`, selectedOption);
  };

  

  

  render() {
    const options = this.state.optionsData
    // [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    //   ];
    const { selectedOption } = this.state;
    return (
      <div className="where_togo_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="form_area">
                <h3>Where you want to go?</h3>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="search_wrap">
                <form className="search_form" action="#">
                  <div className="input_field">
                    {/* <input type="text" placeholder="Where to go?" /> */}
                    {/* <Select
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    /> */}
                    <Search/>
                  </div>
                  {/* <div className="date_input_field">
                    <DatePicker
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                    {/* <input id="datepicker" placeholder="Date" /> 
                  </div> */}
                  {/* <div className="input_field">
                                    <select>
                                        <option data-display="Travel type">Travel type</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                    </select>
                                </div> */}
                  <div className="search_btn">
                    <button className="boxed-btn4 " type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
