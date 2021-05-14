import React, { Component } from 'react';
class Codingprofiles extends Component {
  render() {
    if(this.props.data){
        var coding= this.props.data.coding.map(function(coding){
          return <li key={coding.name} style={{ alignContent: 'center', alignSelf: 'center', marginLeft: '20px', marginRight: '20px' }}><a href={coding.url}><img src = {coding.pic} id = {coding.className} alt="IMG"></img></a></li>
          })
    }

    return (
      
        <section id="coding">
          <div className="row education">
            <div className="three columns header-col">
                <h1><span>Coding Profile</span></h1>
            </div>
            <div>
              <p>Check Out Some of My Coding Profiles.</p>
              <ul style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ffffff', margin: '0', padding: '0'}} >
                {coding}
              </ul>
            </div>
          </div>
        </section>
    );
  }
}

export default Codingprofiles;
