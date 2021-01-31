import React, { Component } from 'react';

class Coding extends Component {
  render() {

    if(this.props.data){
      var code= this.props.data.social.map(function(codes){
        return <li key={codes.name}><a href={codes.url}><i className={codes.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {code}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Coding;