import React, { Component } from "../../node_modules/react";

import Header from "../common/header";
import Footer from "../common/footer";

export default class SinglePageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  } 
  

  render() {
    return (
      <div>
        
          <Header
            showLoginForm={this.showLoginForm}
            LogOut={this.LogOut}
            {...this.props}
          />
       
        {/****Master Container****/}
        <this.props.children
          masterState={this.state}
         
          {...this.props}
        />
        

        {/*Footer*/}
        <Footer {...this.props} />
      </div>
    );
  }
}
