import React, { useState } from 'react';
import './App.css';
import './Animations.css';

function App() {
  const slides = [
    {
      imgSrc: './portfolio.png',
      projectName: 'My portfolio',
      projectDescription: 'This project is my portfolio, it is made with React and is the current website that you are currently on.',
      githubLink: 'https://github.com/WixdomCoding/portfolio',
    },
    {
      imgSrc: './prisma.png',
      projectName: 'Prisma tenta',
      projectDescription: 'Jag utvecklade en interaktiv webbplats där användare kan registrera sig med ett användarnamn, lösenord och välja en roll (antingen som admin eller användare). All användardata lagras i en MySQL-databas. Webbplatsen kräver inloggning, och beroende på användarens roll kommer hen antingen att få möjlighet att skapa och publicera blogginlägg eller endast att läsa dessa inlägg. För att uppnå detta använde jag HTML, CSS, Node.js, Express, Prisma och MySQL. (Bilden var tagen när webbsidan inte var kopplad till databasen, därför är alla values fel).',
      githubLink: 'https://github.com/WixdomCoding/Daniel_tenta3',
    },
    {
      imgSrc: './nodecrud.png',
      projectName: 'NodeJS CRUD',
      projectDescription: 'NodeJS CRUD Description',
      githubLink: 'https://github.com/WixdomCoding/NodeJS-CRUD',
    },
    {
      imgSrc: './dgdlyrics.png',
      projectName: 'DGD Lyrics Reborn',
      projectDescription: 'A website hosting lyrics for the band Dance Gavin Dance.',
      githubLink: 'https://github.com/WixdomCoding/DGD-Lyrics-Reborn',
    },
    {
      imgSrc: './phptenta.png',
      projectName: 'PHP tenta',
      projectDescription: 'A php website',
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
      projectDescription: 'A calendar made with PHP',
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
      projectDescription: 'A fun redesign idea made for fun. A project made by me and 2 others. All js written by me, majority css written by me, and a tiny bit of html written by me.',
      githubLink: 'https://github.com/WixdomCoding/redesign',
    },
    {
      imgSrc: './weatherAPI.png',
      projectName: 'Weather API',
      projectDescription: 'A website for checking the current weather in a specific place. This was the first time that I used an API so the focus was mostly to understand the usage rather than to create a well designed website, as one might be able to tell.',
      githubLink: 'https://github.com/WixdomCoding/Weather-API', 
    },


  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

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
                <div id='floaterslideshow'>

                  <div id='buttonleft'>
                    <button className='arrow-button' onClick={goToPrevSlide}>{'<'}</button>
                  </div>
                  <div>

                    <div>

                      <img className='projectimg' src={slides[currentSlide].imgSrc} alt='Project Image'></img>
                      <h2 className='projectname'>{slides[currentSlide].projectName}</h2>

                    </div>

                  </div>

                  <div id='buttonright'>
                  <button className='arrow-button' onClick={goToNextSlide}>{'>'}</button>
                  </div>

              </div>

            </div>
            <div id='projdescholder'>
            <div id='anchorholder'>
              <a href={slides[currentSlide].githubLink} target='_blank'>GitHub Link</a>
            </div>
            <p className='projectdescription'>{slides[currentSlide].projectDescription}</p>
            </div>

      </div>
    </div>
  );
}

export default App;
