import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './_Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        let data = JSON.stringify({token: localStorage.getItem("user_token")});
        fetch(`/test`, { method: 'POST', headers: { "Content-Type": "application/json"}, body: data})
            .then(res => res.json())
            .then(res => {
                console.log("res", res);
               this.setState({
                   img: res.img
               })

            })
            .catch(err => console.log(err));
        this.state = {
            access: null,
            name: null,
            img: null
        };
        console.log(this.state.name)

    }



    render() {
        //
        return (
            <header>
                <div className="header row">
                    <Link to={'/chat/main'} style={{backgroundImage: 'url('+ require("../../img/logo.png")+')'}} className='logo col-3'></Link>
                    <div className="profile-block col-2 offset-7">
                        {/*<div  className="profile-img" style={{backgroundImage: 'url('+ require("../../img/"+this.state.img+".jpg")+')'}}></div>*/}
                        {/*<div  className="profile-img-edit-pic" style={{backgroundImage: 'url('+ require("../../img/"+this.state.img+".jpg")+')'}}></div>*/}
                        <Link to={'/profile'} className='my-profile'>My profile <i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                    </div>
                </div>

            </header>
    )
    }
}