import React, { Component } from '../../node_modules/react';
export default class Utility extends Component {
    constructor(props) {
        super(props);
        //alert("hh"+JSON.stringify(props.history));
    }

    // static HandlePageClick(e, target) {
    //     history.push('/'+target);
    // }
    static HandlePageClick(e, target) {
        // alert("target"+target+'==='+JSON.stringify((e)))
        // e.history.push(target);
        // alert("hh" + JSON.stringify(e));
        // if(e.componentprops == undefined)
        //  e = this.props
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        if (target !== "") {
            // if (e.componentprops != undefined) {
            //     if (target == "/")
            //         e.componentprops.history.push(target);
            //     else
            //         e.componentprops.history.push("/" + target);
            // }
            // else {
                e.history.push("/"+target);
            // }
            //this.props.history.push(target);
            //this.props.history.push(e);
        }
    }


}