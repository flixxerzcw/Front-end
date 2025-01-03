import React from 'react';
import EmblaCarousel from './EmblaCarousel.tsx';
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css';
import NetflixMovieScroll from './NetflixMovieScroll.jsx';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
 const SLIDES = [
    'carousel-photos/diehardcaro.png',
    'carousel-photos/toystorycaro.png',
    'carousel-photos/interstellarcaro.png',
  ];

const NetflixMainScreen = () => {
  return (
    <div style={componentNetflixScreenStyle}>
      {/* Remove the text in next 2 lines */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <NetflixMovieScroll />
      <NetflixMovieScroll />
    </div>
  );
};

//######## This area controls the Main Netflix div dimensions ##########//
const componentNetflixScreenStyle = {
  flex: '3', // Occupies 3 parts of the row
  display: 'flex',
  flexDirection: 'column', // Stack components vertically
  height: '100vh', // Matches Twittersection height
  padding: '0rem',
  border: '0px solid #ccc',
  borderRadius: '2px',
  backgroundColor: '#000',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
};


export default NetflixMainScreen;
