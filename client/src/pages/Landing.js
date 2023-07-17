import React from 'react';
import Floating from '../assets/floating.mp4';
import LandingContent from '../components/Landing/LandingContent';

const Hero = () => {

  const heroStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
  
  };

  const videoBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  };

  const videoWrapperStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };



  return (
    <div style={heroStyle}>
      <div style={videoBackgroundStyle}>
        <div style={videoWrapperStyle}>
          <video autoPlay loop muted style={videoStyle}>
            <source src={Floating} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

        <LandingContent />
    </div>
  );
};

export default Hero;
