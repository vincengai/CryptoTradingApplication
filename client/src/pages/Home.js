import React from 'react';
import Hero from '../components/Hero/Hero'
import Chart from '../components/Chart/ChartTable';

const Home = () => {
  const homeStyle = {
    padding: '30px',

  }
  return (
    <div style={homeStyle}>
       {/* <Hero /> */}
       <Chart />
    </div>
  )
}

export default Home