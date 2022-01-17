import React from "react";

function Project() {
  const images = [
    {
      img_name:'covid.png',
      app_name:'Covid Posi+ivity',
      app_url:'https://uot-project1-group07.github.io/project1-group07/',
      git_url:'https://github.com/Uot-Project1-Group07/project1-group07'
    },
    {
      img_name:'pim.jpg',
      app_name:'MNMLIZE',
      app_url:'https://mnmlize.herokuapp.com/',
      git_url:'https://github.com/P-I-M/Personal-Inventory-Management-'
    },
    {
      img_name:'deck.jpg',
      app_name:'Mind Decks',
      app_url:'https://group5-project3-uot-duolingo.herokuapp.com/',
      git_url:'https://github.com/Uot-Project3-Group05/uot-project3-group5'
    },
    {
      img_name:'work.png',
      app_name:'Work Day Scheduler',
      app_url:'https://anagha778.github.io/day-scheduler/',
      git_url:'https://github.com/Anagha778/day-scheduler'
    },
    {
      img_name:'code.jpg',
      app_name:'Code Quiz',
      app_url:'https://anagha778.github.io/code-quiz/',
      git_url:'https://github.com/Anagha778/code-quiz'
    },
    {
      img_name:'blog.png',
      app_name:'Tech Blog',
      app_url:' https://pacific-sands-72490.herokuapp.com/',
      git_url:'https://github.com/Anagha778/blog-post'
    },

  ]

  return(
  <div>
    <div>
    <h2>Projects</h2>
    </div>
    <div className="flex-row">
      {images.map(image => (
      <figure key={image.img_name}>
          <div className="cap"><a className="lk" href={image.app_url} target="_blank">{image.app_name}</a><a className="lk" href={image.git_url} target="_blank"><i className="fa logo">&#xf09b;</i></a></div>
          <img src={require(`../../assets/small/${image.img_name}`).default} className="img-thumbnail mx-1" alt={image.app_name} key={image.app_name}/>                
      </figure>   
        ))}
    </div>
  </div>
  );
};

export default Project;