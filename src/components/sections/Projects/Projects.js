import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function Projects() {
  return (
    <div className='cards' id='projects'>
        <h1 className='header'>FEATURED PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/clark.png'
              text='This is a Full-Stack Application which creates a user that can deposit, withdraw and check balance. Front-end developed using React and the Back-end uses MongoDB, and Node.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/Clark-Financial-Full-Stack#readme'
            />
            <CardItem
              src='images/todo.png'
              text="A To-Do List application developed using React. UseState and UseEffect utilized to sort To-Do's on a dropdown list. Stores To-Do's locally on server using JavaScript."
              label='Click for Readme'
              path='//www.github.com/samclark1999/to_Do_List#readme'
            />
              <CardItem
              src='images/home.png'
              text='This is my website I created using React, custom JS, and CSS. I also used Google Fonts, React Icons and styled-components libraries. This app has a custom domain and is deployed using AWS.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/My-Portfolio#readme' 
            />
          </ul>
          <br/>
          <h1 className='header'>OTHER PROJECTS</h1>
          <br/>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='images/cart.png'
              text="This is a shopping cart that allows users to add items to cart and restock items using a Strapi database. I also used Postman to test API's to and from Strapi."
              label='Click for Readme'
              path='//www.github.com/samclark1999/Shopping_Cart#readme'
            />
            <CardItem
              src='images/web.png'
              text='This is a Holy Grail formatted website with React that uses Node,and Redis on top of Docker. Also used SuperAgent to communicate to the server.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/Full-Stack-Holy-Grail#readme'
            />
            <CardItem
              src='images/tic.png'
              text='The classic game developed using React. UseState keeps track of player turn as well as winner.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/Tic_Tac_Toe#readme'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pacman.png'
              text='This is a simple JavaScript and CSS project where Pacman is animated and bouces off the wall and flips the orientation of Pacman.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/Pacman#readme'
            />
            <CardItem
              src='images/eyes.png'
              text='This is a Javascript project where the eyes on the browser follow your mouse cursor using the onmouse function.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/Eyes#readme'
            />
            <CardItem
              src='images/bus.png'
              text='This maps the bus stops from MIT to Harvard. The map comes from Mapbox, which gives functionality for the marker shown on stops.'
              label='Click for Readme'
              path='//www.github.com/samclark1999/Bus_Route_Tracker#readme'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;