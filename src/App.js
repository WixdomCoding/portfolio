import React from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './Animations.css';

function App() {
  return (
    <div>
      <div id='page1'>
        <div id='topholder'>
          <header id='firstfloat'>
            <div id='firstfloattext'>
              <h1 id='welcome'>Welcome</h1>
              <h2 id='introduction'>
                My name is 
                <span class='namecolor'> Daniel Parraguez Öberg</span>
              </h2>
              <h3 id='description'>I am a full stack developer, but i prefer frontend development. <br /><br />The current coding languages i know are the following:</h3>
              <div id='languageholder'>
                <img id='htmllang' src='./languages/html.png'></img>
                <img id='csslang' src='./languages/css.png'></img>
                <img id='jslang' src='./languages/javascript.png'></img>
                <img id='nodelang' src='./languages/node.png'></img>
                <img id='reactlang' src='./languages/react.png'></img>
                <img id='phplang' src='./languages/php.png'></img>

              </div>
            </div>

          </header>
          
          <div id='secondfloat'>
            <div className='box'>
              <div id='metxtholder'>
                <p id='metxt'>So what makes <br />
                <span class='namecolor'>me</span>, <span class='namecolor'>me</span>?</p>
                <img id='vector' src='Vector.png'></img>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div id='page2'>
        <header>
          <h1 id='welcome2'>About me</h1>
          <p id='abouttext'>
            Hello! I am a Swedish / Chilean studying fullstack developer currently living in Stockholm, Sweden. <br />
            Currently, I am studying at NTI Gymnasiet Södertörn in the TE4 class.
            I have been coding for about 3 and a half years now, and I have learned a lot during that time.
            I have learned a lot of different languages including some that are not used in web development, but I prefer frontend development.
            React is one of the more recent languages that I have learnt and I have been using it for a couple months now.
          </p>
        </header>
        <div>
          <img id='me' src='daniel.png'></img>
        </div>
      </div>

      <div id='page3'>
        <header>
          <h1 id='welcome3'>Projects</h1>
        </header>
        <div id='projectsholder'>
          <div>
            <img className='projectimg' src='./portfolio.png'></img>
            <h2 className='projectname'>My portfolio</h2>
            <p className='projectdescription'>This project is my portfolio, it is made with React and is the current website that you are currently on.</p>
          </div>
          <div>
            <img className='projectimg' src='./portfolio.png'></img>
            <h2 className='projectname'>Prisma tenta</h2>
            <p className='projectdescription'></p>
          </div>


        </div>

        
      </div>
    </div>
  );
}

export default App;
