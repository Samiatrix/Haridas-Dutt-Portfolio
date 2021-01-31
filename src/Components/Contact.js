import React, { Component } from 'react';
import emailjs from 'emailjs-com';
class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         feedback: "",
      };
   }
   handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({ [name]: value });
   }

   sendMessage(event) {
      event.preventDefault();
      if (!this.validateMail()) {
         return;
      }
      const templateParams = {
         from_name: this.state.name + " (" + this.state.email + ")",
         to_name: "haridasdutt11@gmail.com",
         feedback: this.state.feedback
      };
      emailjs.send("gmail", "portfoliositecontact", 'template_rpt6m3d', templateParams).then(
            function (response) {
               console.log("SUCCESS!", response.status, response.text);
            },
            function (err) {
               console.log('FAILED...', err);
            }
         );
      this.setState({
         name: "",
         email: "",
         feedback: ""
      });
   }

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
                <form
                   className="ui form"
                   id={this.props.id}
                   name={this.props.name}
                   method={this.props.method}
                   action={this.props.action} 
                  //  id="contactForm" 
                  //  name="contactForm"
               >
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                         <input type="text" 
                           defaultValue="" 
                           size="35" 
                           id="contactEmail" 
                           name="contactEmail" 
                           // onChange={this.handleChange} 
                           onChange={this.handleInputChange.bind(this)}
                           placeholder="your name"
                           required
                           value={this.state.name}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleInputChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                         <textarea cols="50" rows="10" 
                           id="contactMessage" 
                           name="contactMessage" 
                           onChange={this.handleInputChange.bind(this)}
                           placeholder="what would you like to chat about?"
                           required
                           value={this.state.feedback}></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>
           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
