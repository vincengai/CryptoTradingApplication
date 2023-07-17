import { useRef, useState, useEffect } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'
import { useNavigate } from 'react-router-dom';

const AppContainer = styled('div', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Container = styled('div', {
  display: 'flex',
  gap: 10,
  marginBottom: 80,
})

const Box = styled('div', {
  position: 'relative',
  height: 50,
  width: 50,
})

const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
  cursor: 'pointer'
}

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#CFCFCF',
  border: 'solid 2px #1a1a1a',
})

const BackBox = styled(animated.div, {
  ...SharedStyles,
  // backgroundColor: '#6cab64',
  border: 'solid 2px #A9A9A9',
  color: '#fafafa',
})
const buttonStyle = {
  height: 50,
  width: 85,
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
  cursor: 'pointer',
  border: 'solid 2px #A9A9A9',
  color: '#fafafa',
  color: 'white',
};
const items = ['S', 'P', 'A', 'C', 'E', 'X', 'C', 'H', 'A', 'N', 'G', 'E', 'ENTER']
const enter = ['ENTER']

export default function Welcome() {
  const [trail, api] = useTrail(items.length - 1, () => ({
    rotateX: 0,
  }))

  const navigate = useNavigate();
  const isFlipped = useRef(false)

  const handleButtonClick = () => {
    navigate('/home');
  };

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      })

      isFlipped.current = false
    } else {
      api.start({
        rotateX: 180,
      })
      isFlipped.current = true
    }
  }

  return (
    <>
      <AppContainer style={{display:'flex', flexDirection: 'column'}}>
        <Container onClick={handleClick}>
          {trail.map(({ rotateX }, i) => (
            <Box key={i}>
              <FrontBox
                key={items[i]}
                style={{
                  transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                  transformStyle: 'preserve-3d',
                }}>
                {'?'}
              </FrontBox>
              <BackBox
                style={{
                  transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                  transformStyle: 'preserve-3d',
                }}>
                {items[i]}
              </BackBox>
            </Box>
          ))}
        </Container>
        <Container onClick={handleClick}>
          {trail.map(({ rotateX }, i) => (
             i >= 11 ? 
              <Box key={i}>
                <FrontBox
                  key={items[i]}
                  style={{
                    transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                    transformStyle: 'preserve-3d',
                  }}>
                  {'?'}
                </FrontBox>
                <BackBox 
                  onClick={handleButtonClick}
                  style={{
                    transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                    transformStyle: 'preserve-3d',
                    width: 85
                  }}>
                  ENTER
                </BackBox>
              </Box>
            : null 
            ))}
      </Container>
      </AppContainer>
    </>
  )
}
