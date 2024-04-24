'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade, FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import * as Styled from './Carousel.styled';
import { useCallback, useState } from 'react';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [slideSwiper, setSlideSwiper] = useState<SwiperType | null>(null);
  const [thumbNextIndex, setThumbNextIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = [
    {
      title: 'Funtico Platform',
      text: 'The incentive-driven platform that provides the ultimate player experience. Compete-2-Win, Engage-2-Gain!',
      button: { text: 'Find Out More', link: '/' },
      image: '/images/platform.png',
    },
    {
      title: 'Funtico Games',
      text: 'As a power-house in developing proprietary games, Funtico constantly produces new exciting titles from multiple genres!',
      button: { text: 'Find Out More', link: '/' },
      image: '/images/games.png',
    },
    {
      title: 'Funtico Hub',
      text: "Robust data, NFT management, storefront, and other tools unleash developers' full creativity on Funtico.",
      button: { text: 'Find Out More', link: '/' },
      image: '/images/hub.png',
    },
  ];

  const stopAutoplay = useCallback(() => {
    slideSwiper && (slideSwiper.autoplay.paused ? slideSwiper.autoplay.resume() : slideSwiper.autoplay.pause(), setPaused(slideSwiper.autoplay.paused));
  }, [slideSwiper]);

  return (
    <Styled.Wrapper>
      <Swiper
        modules={[Autoplay, Thumbs, EffectFade]}
        slidesPerView={1}
        effect={'fade'}
        loop={true}
        onSwiper={setSlideSwiper}
        grabCursor={true}
        onSlideChange={() => setPaused(false)}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3000, disableOnInteraction: false, waitForTransition: true }}
        onActiveIndexChange={(swiper) => {
          if (swiper.realIndex === slides.length - 1) {
            setThumbNextIndex(0);
          } else {
            setThumbNextIndex(swiper.realIndex + 1);
          }
        }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Styled.Slide>
              <Image src={slide.image} alt={slide.title} fill style={{ objectFit: 'cover', zIndex: -1 }}></Image>
              <Styled.Overlay>
                <Styled.Title>{slide.title}</Styled.Title>
                <Styled.Text>{slide.text}</Styled.Text>
                <Styled.Button href={slide.button.link}>{slide.button.text}</Styled.Button>
              </Styled.Overlay>
            </Styled.Slide>
          </SwiperSlide>
        ))}
      </Swiper>
      <Styled.Pagination>
        <Swiper modules={[Thumbs, FreeMode]} onSwiper={setThumbsSwiper} slidesPerView={3} onClick={() => setPaused(false)}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Styled.Thumb $animate={index === thumbNextIndex ? true : false} $play={paused}>
                <Image src={slide.image} alt={slide.title} width={200} height={200} style={{ objectFit: 'cover', height: '100%' }}></Image>
              </Styled.Thumb>
            </SwiperSlide>
          ))}
        </Swiper>
        <Styled.Icon onClick={stopAutoplay}>
          {paused ? (
            <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <mask id='mask0_263_25' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                <rect width='24' height='24' fill='#fff' />
              </mask>
              <g mask='url(#mask0_263_25)'>
                <path d='M8 19V5L19 12L8 19Z' fill='#fff' />
              </g>
            </svg>
          ) : (
            <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <mask id='mask0_263_13' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                <rect width='24' height='24' fill='#fff' />
              </mask>
              <g mask='url(#mask0_263_13)'>
                <path d='M14.6667 19V5H16V19H14.6667ZM8 19V5H9.33333V19H8Z' fill='#fff' />
              </g>
            </svg>
          )}
        </Styled.Icon>
      </Styled.Pagination>
    </Styled.Wrapper>
  );
};

export default Carousel;
