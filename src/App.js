import React, { useState } from 'react';
import './App.css';
import './Animations.css';

  const slides = [
    {
      imgSrc: './portfolio.png',
      projectName: 'My portfolio',
      projectDescription: 'This project is my portfolio, it is made with React and is the current website that you are on. I had a limited time to make it, so the project has not reached its full potential yet.',
      githubLink: 'https://github.com/WixdomCoding/portfolio',
    },
    {
      imgSrc: './prisma.png',
      projectName: 'Prisma tenta',
      projectDescription: "I developed an interactive website where users can register with a username, password, and choose a role (either as an admin or a regular user). All user data is stored in a MySQL database. The website requires login, and depending on the user's role, they will either have the ability to create and publish blog posts or only read these posts. To achieve this, I used HTML, CSS, Node.js, Express, Prisma, and MySQL. (The image was taken when the website was not connected to the database, hence all values are incorrect).",
      githubLink: 'https://github.com/WixdomCoding/Daniel_tenta3',
    },
    {
      imgSrc: './nodecrud.png',
      projectName: 'NodeJS CRUD',
      projectDescription: 'A simple CRUD application made with NodeJS. All the users as well as all of their information is showcased on the website.',
      githubLink: 'https://github.com/WixdomCoding/NodeJS-CRUD',
    },
    {
      imgSrc: './dgdlyrics.png',
      projectName: 'DGD Lyrics Reborn',
      projectDescription: 'A website hosting lyrics for the band Dance Gavin Dance. This was one of the first websites where I was able to use my own design. The website is made with HTML, CSS, and Javascript. The thought was to continue to work on this website, adding sections for albums as well as other things, but the code is old, it would be better to work on it from scratch.',
      githubLink: 'https://github.com/WixdomCoding/DGD-Lyrics-Reborn',
    },
    {
      imgSrc: './phptenta.png',
      projectName: 'PHP tenta',
      projectDescription: 'A php website where you would add products through a form (An image, the name and the price) and then it would be shown on the website. You could also remove products from the website. The website is connected to a MySQL database.',
      githubLink: 'https://github.com/WixdomCoding/DanielP_hemtenta2',
    },
    {
      imgSrc: './isitfriday.png',
      projectName: 'Is it friday?',
      projectDescription: 'A simple website which tells you if it is friday or not and how long it is until the next friday.',
      githubLink: 'https://github.com/WixdomCoding/it-is-friday-',
    },
    {
      imgSrc: './calendar.png',
      projectName: 'PHP calendar',
      projectDescription: 'A calendar made with PHP where you can see the current month as an image, as well as all of the months and their "namnsdag", which is a thing in Sweden where you celebrate your name on a specific day.',
      githubLink: 'https://github.com/WixdomCoding/kaleder-finished',
    },
    {
      imgSrc: './todolist.png',
      projectName: 'To-Do List application',
      projectDescription: 'A simple to-do list application made with js. It is possible to add, remove and edit tasks. It is one of my earlier projects from when I was just learning js.',
      githubLink: 'https://github.com/WixdomCoding/Daniel_hemtenta1',
    },
    {
      imgSrc: './jsexercises.png',
      projectName: 'Javascript Exercises',
      projectDescription: 'A bunch of javascript exercises with no design. Purely to mess around in js, so everything is shown in the console.',
      githubLink: 'https://github.com/WixdomCoding/Javascript',
    },
    {
      imgSrc: './githubredesign.png',
      projectName: 'GitHub Redesign',
      projectDescription: 'A redesign idea made for fun. A project made by me and 2 others. All js written by me, majority css written by me, and a tiny bit of html written by me.',
      githubLink: 'https://github.com/WixdomCoding/redesign',
    },
    {
      imgSrc: './weatherAPI.png',
      projectName: 'Weather API',
      projectDescription: 'A website for checking the current weather in a specific place. This was the first time that I used an API so the focus was mostly to understand the usage rather than to create a well designed website, as one might be able to tell.',
      githubLink: 'https://github.com/WixdomCoding/Weather-API', 
    },


  ];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  
  return (
    <div>
      <section id='page1'>
        <div id='topholder'>
          <header id='firstfloat'>
            <div id='firstfloattext'>
              <h1 id='welcome'>Welcome</h1>
              <h2 id='introduction'>
                My name is <span className='namecolorgold'>Daniel Parraguez Öberg</span>
              </h2>
              <h3 id='description'>
                I am a full stack developer, but I prefer frontend development.
                <br />
                <br />
                The current coding languages I know are
              </h3>
              <div id='languageholder'>
                <a href='https://en.wikipedia.org/wiki/HTML5'><img id='htmllang' src='./languages/html.png' alt='HTML'></img></a>
                <a href='https://en.wikipedia.org/wiki/CSS'><img id='csslang' src='./languages/css.png' alt='CSS'></img></a>
                <a href='https://en.wikipedia.org/wiki/JavaScript'><img id='jslang' src='./languages/javascript.png' alt='JavaScript'></img></a>
                <a href='https://en.wikipedia.org/wiki/Node.js'><img id='nodelang' src='./languages/node.png' alt='Node.js'></img></a>
                <a href='https://en.wikipedia.org/wiki/React_(software)'><img id='reactlang' src='./languages/react.png' alt='React'></img></a>
                <a href='https://en.wikipedia.org/wiki/PHP'><img id='phplang' src='./languages/php.png' alt='PHP'></img></a>
              </div>
            </div>
          </header>
  
          <div id='secondfloat'>
            <div className='box'>
              <div id='metxtholder'>
                <p className='zoom' id='metxt'>
                  <span id='so'>So </span>
                  <span id='what'>what </span>
                  <span id='makes'>makes </span>
                  <span className='namecolorgold me1'>me</span>,{' '}
                  <span className='namecolorgold me2'>me</span>?
                </p>
                <img id='vector' src='Vector.png' alt='Vector'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section id='page2'>
        <header>
          <h1 id='welcome2'>About me</h1>
          <p id='abouttext'>
            Hello! I am a Swedish/Chilean studying fullstack developer currently living in Stockholm, Sweden.
            <br />
            Currently, I am studying at NTI Gymnasiet Södertörn in the TE4 class. I have been coding for about 3 and a half years now, and I have learned a lot during that time. I have learned a lot of different languages, including some that are not used in web development, but I prefer frontend development. React is one of the more recent languages that I have learnt and I have been using it for a couple of months now.
          </p>
        </header>
        <div>
          <img id='me' className='zoom' src='daniel.png' alt='Daniel'></img>
        </div>
      </section>
  
      <section id='page3'>
        <header>
          <h1 id='welcome3'>Projects</h1>
        </header>
        <div>
          <div id='projectsholder'>
            <div id='floaterslideshow'>
              <div id='buttonleft'>
                <button className='arrow-button zoom' onClick={goToPrevSlide}>{'<'}</button>
              </div>
              <div>
                <div>
                  <img className='projectimg' src={slides[currentSlide].imgSrc} alt='Project'></img>
                </div>
              </div>
              <div id='buttonright'>
                <button className='arrow-button zoom' onClick={goToNextSlide}>{'>'}</button>
              </div>
            </div>
          </div>
          <div id='projdescholder'>
            <div id='anchorholder'>
             <h2 className='projectname'>{slides[currentSlide].projectName}</h2>
              <a href={slides[currentSlide].githubLink} target='_blank' rel='noopener noreferrer'>
                GitHub Link
              </a>
            </div>
            <p className='projectdescription'>{slides[currentSlide].projectDescription}</p>
          </div>
        </div>
      </section>
  
      <footer>
        <h1 id='footername'>Daniel Parraguez Öberg</h1>
        <div id='footerholder'>
          <div id='footerleft'>
            <div id='contactme'>
              <div>
                <b>Contact me</b>
              </div>
              <div>
                <p>079-335 25 90</p>
              </div>
              <div>
                <p>business.danielparraguezoberg@gmail.com</p>
              </div>
            </div>
          </div>
          <div id='footerright'>
            <div id='findme'>
              <b>Find me here</b>
            </div>
            <div>
              <a href='https://github.com/WixdomCoding' target='_blank' rel='noopener noreferrer'>
                <img className='footericon zoom' src='./githubicon.png' alt='GitHub'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/daniel-parraguez-%C3%B6berg-29753b2a5/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='footericon zoom' src='./linkedinicon.png' alt='LinkedIn'></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
