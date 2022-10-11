import React from 'react'
import { Container } from '../../Styles'
import { AboutMe, Skills, SkillBox, AboutLink } from './About.styled'

function About() {
  return (
    <Container>
      <AboutMe>
        <p>Hello! My name is Zarina and I am a Frontend Developer.</p>

        <p>
          From the moment I wrote my first line of code I was hooked. The
          interest in programming led me through the quite fascinating web
          development course and helped me to learn problem solving, ability to
          learn quickly and always be eager to know more about new technologies.
        </p>

        <p>
          I've been continuously building projects for about a year. In addition
          to the basic web development tools (HTML/CSS/ Basic Javascript), I've
          also learned more advanced JavaScript and most recently, I've gotten
          acquainted with Webpack and testing technologies. Now I am learning
          React JS.
        </p>
        <p>
          I believe that the best way to learn is with practice and have put all
          these technologies and techniques into use. I have built several{' '}
          <AboutLink to={'/projects'}>projects</AboutLink> that I invite you to
          look at in the project section.
        </p>
        <p>
          I am currently looking for entry Frontend Developer role to expand my
          knowledge and put my skills to use.
        </p>
      </AboutMe>

      <h2>What I know</h2>

      <Skills>
        <SkillBox>
          <h2>Technical Skills I practiced</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Responsive Web Design</li>
            <li>JSON, AJAX</li>
            <li>Webpack</li>
            <li>Git Version Control</li>
            <li>ReactJS / Redux</li>
            <li>Node JS / Express</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h2>Technical Skills I am familiar with</h2>
          <ul>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Typescript</li>
            <li>Testing and Debugging</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication</li>
            <li>Self-motivation</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
          </ul>
        </SkillBox>
      </Skills>
    </Container>
  )
}

export default About

// SiWebpack, SiHtml5, SiCss3, SiJavascript, SiReact
