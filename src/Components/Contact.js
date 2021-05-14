import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed';

class Contact extends Component {
   componentDidMount() {
      const popup1 = typeformEmbed.createPopup('https://pz7lfpiqlxk.typeform.com/to/q5yYOPqn', {
        mode: 'popup',
        autoclose: 3000,
        hideHeaders: true,
        onSubmit: function () {
          console.log('Typeform successfully submitted');
        }
      });
  
      document.getElementById('bt-popup').addEventListener('click', function () {
        popup1.open();
      });
   }
   render() {
      return (
         <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

               <button id="bt-popup" class="my-button">Popup</button>

         </div>
   </section>
    );
  }
}

export default Contact;
