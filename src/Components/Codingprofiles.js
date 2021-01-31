import React, { Component } from 'react';
import classes from './Codingprofiles.module.css';
class Codingprofiles extends Component {
  render() {
    if(this.props.data){
        var coding= this.props.data.coding.map(function(coding){
            return <li key={coding.name} style = {{alignContent: 'center', alignSelf: 'center'}}><a href={coding.url}><img src = {coding.pic} id = {coding.className}></img></a></li>
          })
    }

    return (
      
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
                <h1><span>Coding Profile</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <h1>Check Out Some of My Coding Profiles.</h1>
            
                  <ul style={{display: "flex", justifyContent: 'space-between', backgroundColor: '#ffffff', margin: '0', padding: '0'}} >
                    {coding}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Codingprofiles;
