// Importing required modules
import React from 'react';
import './Portfolio.css'; 



const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <section>
        <h1 className="portfolio-title">Mridul Gupta</h1>

        </section>
        <nav className="portfolio-nav">
          <ul className="portfolio-nav-list">
            <li className="portfolio-nav-item">Home</li>
        <a href="#projects"  className="portfolio-nav-item">Projects </a>
        <a href="#abt me"  className="portfolio-nav-item">About </a>
        <a href="#cntct"  className="portfolio-nav-item">Contact </a>
 
     
          </ul>
        </nav>
      </header>
<img src='./profile.jpg' alt="12345" className="portfolio-about-image" />
      <main className="portfolio-main">
      
          <h2 className="portfolio-section-title">Welcome to my Portfolio</h2>

          <a href="#projects" className="portfolio-cta">View My Projects</a>
       
        <section id="projects" className="portfolio-section portfolio-projects">
          <h2 className="portfolio-section-title">My Projects</h2>
          <div className="portfolio-project-list">
            <div className="portfolio-project-card">
              <img src="Proj_1.png" alt="Project 1" className="portfolio-project-image" />
              <h3 className="portfolio-project-title">Project 1</h3>
              <p className="portfolio-project-description">A web app for tracking tasks </p>
              <a href="https://todo-list-crudapp.netlify.app/" target='blank' className="portfolio-project-link">View Project</a>
            </div>
            <div className="portfolio-project-card">
              <img src="Proj_2.png" alt="Project 2" className="portfolio-project-image" />
              <h3 className="portfolio-project-title">Project 2</h3>
              <p className="portfolio-project-description">A Text Utility App</p>
              <a href="https://github.com/Mridul004/Text-Utility-App"  target='blank'  className="portfolio-project-link">View Project</a>
            </div>
            <div className="portfolio-project-card">
              <img src="project3.png" alt="Project 3" className="portfolio-project-image" />
              <h3 className="portfolio-project-title">Project 3</h3>
              <p className="portfolio-project-description">Work In Progress</p>
              <a href="https://project3.example.com" className="portfolio-project-link">View Project</a>
            </div>
          </div>
         
        </section>
        <section id="abt me" className="portfolio-section portfolio-contact">
          <h2 className="portfolio-section-title">About Me</h2>
          <div>
          </div>
            

        </section>
          <p className="portfolio-about-description">I am a self-taught web developer with 3 years of experience. I specialize in front-end development using modern web technologies like ReactJS, Redux, and CSS-in-JS. I have a keen eye for detail and strive to create visually appealing and user-friendly websites.</p>
        <section id="cntct" className="portfolio-section portfolio-contact">
          <h2 className="portfolio-section-title">Get in Touch</h2>
          <p className="portfolio-contact-description">I am currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out to me using my email <br />
           <a className='mail' href="mailto:mg.mridulgupta04@gmail.com">mg.mridulgupta04@gmail.com</a>

          </p>
          <br />
<form className="portfolio-contact-form">
<input type="text" placeholder="Your Name" className="portfolio-contact-form-input" />
&nbsp;
<input type="email" placeholder="Your Email" className="portfolio-contact-form-input" />
&nbsp;
<input placeholder="Your Message" className="portfolio-contact-form-input"></input>
&nbsp;
<button type="submit" className="portfolio-contact-form-submit" >Send Message</button>
</form>
</section>
</main>
<footer className="portfolio-footer">
<p className="portfolio-footer-text">© 2023 Mridul's Portfolio. All rights reserved.</p>
<ul className="portfolio-footer-social">
<li className="portfolio-footer-social-item">



<a href="https://www.linkedin.com/in/mridul-gupta-ba6200203" target='blank' className="portfolio-footer-social-link">
 LinkedIn
<i className="fab fa-linkedin"></i>

</a>
<br />
</li>
<li className="portfolio-footer-social-item">
<a href="https://github.com/Mridul004" target='blank' className="portfolio-footer-social-link">
  Github
<i className="fab fa-github"></i>
</a>
</li> 

</ul>
</footer>
</div>
);
};

export default Portfolio;