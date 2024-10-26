import React from 'react';
import './../styles/style.css';
import img from './../assets/image.png';
import bgimg from './../assets/bgimg.jpg';


export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bgimg})` }}>
      <h3>This is Mike BLOGS</h3>
      <img src={img} alt="Blog Image" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptates ipsa. Error amet est ipsum aspernatur reprehenderit cum alias voluptate, deleniti facilis rem tenetur qui ad soluta culpa maxime fugit!</p>
    </div>
  );
}
