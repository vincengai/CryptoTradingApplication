import React from 'react';
import Welcome from './Welcome';
const LandingContent = () => {

  const contentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
    padding: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={contentStyle}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="your-video-source.mp4" type="video/mp4" />
      </video>

      <div>
        <Welcome />
      </div>
    </div>
  );
};

export default LandingContent;
