import React from 'react';
import './about.css'
import Html from '../assets/HTML5_Badge.svg';
import Css from '../assets/css-3.svg'
import Java from '../assets/javascript.svg'
import Boot from '../assets/bootstrap.png'
import react from '../assets/react.svg'
import nodeJs from '../assets/nodejs.png'

function About() {
  return (
    <section id="about">
      <span className='aboutTitle'>What I Know</span>
      <span className='aboutDesc'>
        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript.
      </span>
      <div className='aboutBars'>
        <div className='aboutBar'>
          <img src={Html} alt="HTML5 Logo" className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>HTML</h2>
            <p>HTML, or Hypertext Markup Language, is the basic code used to structure web pages and their content. It defines the meaning and structure of web content, and allows users to click links and be redirected to new pages. HTML is often used with other technologies,</p>
          </div>
        </div>

        <div className='aboutBar'>
          <img src={Css} alt="css Logo" className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>CSS</h2>
            <p>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
          </div>
        </div>

        <div className='aboutBar'>
          <img src={Java} alt="HTML5 Logo" className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Java</h2>
            <p>JavaScript (JS) is a programming language that developers use to make web pages interactive. It's a client-side scripting language that's one of the core technologies of the World Wide Web.</p>
          </div>
        </div>

        <div className='aboutBar'>
          <img src={Boot} alt="HTML5 Logo" className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Bootstrap</h2>
            <p>Bootstrap is a free, open-source web development framework that helps developers create websites and web apps. It's designed to help developers create responsive, mobile-first websites quickly and easily. Bootstrap includes a collection of reusable code written in HTML, CSS, and JavaScript, along with optional JavaScript plugins.</p>
          </div>
        </div>

        <div className='aboutBar'>
          <img src={react} alt="css Logo" className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>React</h2>
            <p>React is a free, open-source JavaScript library that helps developers create user interfaces (UIs) for web applications and native platforms. React is designed to be declarative and component-based, allowing developers to break down UIs into reusable components that can be combined into screens, pages, and apps. React components can include buttons, text, images, and more, and they can be written by different people, teams, and organizations.</p>
          </div>
        </div>

        <div className='aboutBar'>
          <img src={nodeJs} alt="css Logo" className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Node.js</h2>
            <p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

