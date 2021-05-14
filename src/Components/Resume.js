import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.grade}</p></div>
      })
      var experience = this.props.data.experience.map(function (exp){
        return <div key={exp.name}><h3>{exp.name}</h3>
          <p className="info">{exp.tech}<span>&bull;</span> <em className="date">{exp.years}</em></p>
        </div>
      })
      var projects = this.props.data.project.map(function (project){
        return <div key={project.company}><a href={project.link}><h3>{project.name}</h3></a>
          <p className="info">{project.tech}<span>&bull;</span> <em className="date">{project.years}</em></p>
          <p>{project.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

      <div className="three columns header-col">
        <h1><span>Experience</span></h1>
      </div>

      <div className="nine columns main-col">
        {experience}
      </div>

      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
            {projects}
        </div>

      </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      <hr></hr>
      </div>
   </section>
    );
  }
}

export default Resume;
