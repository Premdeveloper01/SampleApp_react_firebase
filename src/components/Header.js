import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./FireStore";
//this is the header component part which we can see in ui
class Header extends Component {
    //this is the saveUid function for saving the ids in firebase
  saveUid = e => {
    e.preventDefault();
    const db = firebase.firestore();// to connect the firebase from here
    // this is setting for firebase which not more useful
    db.collection("user").add({
      userid: localStorage.getItem("userId"),
      mlsid: localStorage.getItem("mlsId")
    }); // adding the data from local storage to firebase
    //
  };

  render() {
    const db = firebase.firestore();
  
    let citiesRef = db.collection("user");
    citiesRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
      //  can check the data which is coming from firebase in firestore-cloud
      // these code not use for any functionality but to checking data purpose only are using this code
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="/">
            SimplyRets
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                {/* above link is home link  */}
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-success" onClick={this.saveUid}>
                  Save UiD
                </button>
                {/* this is the button is used to save the userid in firebase */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
