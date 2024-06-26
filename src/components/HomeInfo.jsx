import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from "../assets/icons"
const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
  <p className='font-medium sm:text-xl text-center'>
  {text}
  </p>
  <Link to={link} className="text-sm neo-brutalism-white neo-btn">{btnText}
  <img src={arrow} className="w-4 h-4 object-contain "/></Link>
  </div>
)
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-8 px-8 text-white mx-5">Hi, I am <span className="font-semibold">Curtis</span>
    <br/>
    A frontend developer looking for work</h1>
  ),
  2: (
    <InfoBox text="Apprentice Developer Learn more about me"
    link="/about"
    btnText="About me" />
  ),
  3: (
    <InfoBox text="Working on multiple side projects"
    link="/projects"
    btnText="in progress" />
  ),
  4: (
    <InfoBox text="My GitHub Projects"
    link="/githubprojects"
    btnText=" Github projects" className=""/>
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
