import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi a ratione quaerat enim ipsa laudantium ab natus tenetur alias voluptates. Lorem ipsum dolor sit amet. </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
    <img src={images.welcome} alt="Header img" />
    </div>
  </div>
);

export default Header;
