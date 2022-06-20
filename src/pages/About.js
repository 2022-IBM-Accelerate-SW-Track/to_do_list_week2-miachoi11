import React, { Component } from 'react';
import "./About.css";
import aboutMePhoto from "../assets/aboutMePhoto.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={aboutMePhoto}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Mia Choi</div>
          <div className="brief_description">
            Hi! My name is Mia and I'm an upcoming junior at Johns Hopkins University double majoring in Computer Science and Public Health. I am also interning this summer at an ed-tech startup called Phenomena!
          </div>
          <div className="hobbies">
            In my spare time I love learning how to build things with code, playing video games, listening to psychology podcasts, and watching videos of cute animals on Youtube! 
          </div>
        </div>
      </div>
    </div>
    )
  }
}