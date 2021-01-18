import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeHeader from './components/HomeSection/HomeHeader/HomeHeader.jsx';
import HomeSection from './components/HomeSection/HomeSection.jsx';
import HomeSectionNoTitle from './components/HomeSection/HomeSectionNoTitle.jsx'
import Footer from './components/Footer/Footer.jsx';
import AboutMe from './components/PageSections/AboutMe.jsx';
import MySkills from './components/PageSections/MySkills.jsx';
import GetInTouch from './components/PageSections/GetInTouch.jsx';
import Projects from './components/PageSections/Projects.jsx';
import Documents from './components/PageSections/Documents.jsx';

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <HomeSection title={"About Me"} isWhite={true} myChild={<AboutMe/>}> </HomeSection>
      <HomeSection title={"My Skills"} isWhite={false} myChild={<MySkills/>}></HomeSection>
      <HomeSection title={"Projects"} isWhite={true} myChild={<Projects/>}></HomeSection>
      <HomeSectionNoTitle isWhite={false} myChild={<Documents/>}></HomeSectionNoTitle>
      <HomeSection title={"Get in Touch"} isWhite={true} myChild={<GetInTouch />}></HomeSection>
      <Footer />
    </div>
  );
}

export default App;
