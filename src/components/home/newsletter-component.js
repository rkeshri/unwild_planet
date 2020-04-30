import React, { Component } from "react";


export default class NewsLetterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div className="newletter_area overlay mb_70">
            <div className="container-fluid ">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-10">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="newsletter_text">
                                    <h4>Subscribe Our Newsletter</h4>
                                    <p>Subscribe newsletter to get offers and about
                                        new places to discover.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mail_form">
                                    <div className="row no-gutters">
                                        <div className="col-lg-9 col-md-8">
                                            <div className="newsletter_field">
                                                <input type="email" placeholder="Your mail" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="newsletter_btn">
                                                <button className="boxed-btn4 " type="submit" >Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        );
    }
}

