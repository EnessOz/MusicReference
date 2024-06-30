import React from 'react';
import { FaSquareInstagram, FaYoutube, FaSpotify } from "react-icons/fa6";

export const HomePage = () => {
  return (
    <div className='home-container'>
      <div className='home-img'>
        <img src='/photos/eo-avatar.png' alt='avatar' />
      </div>
      <div className='home-name-header'>
          <h3>Enes Öz</h3>
        </div>
      <div className='home-a'>
        <a className='button-74 ' href='/bati'>Rock/Pop Repertuar</a>
        <a className='button-74 ' href='/dogu'>Gelenksel Repertuar</a>
        <a className='button-74 ' href='/yabanci'>Yabancı Repertuar</a>
      </div>
      <div className='home-social-header'>
        <h3>Sosyal Medya</h3>
      </div>
      <div className='home-social-links'>
        <a className='button-74 ' href='https://www.instagram.com/enesozmusic/'><FaSquareInstagram /> Instagram</a>
        <a className='button-74 ' href='https://www.youtube.com/channel/UC0xpAMc-awLsP-5Jje5l_GA'><FaYoutube /> Youtube</a>
        <a className='button-74 ' href='https://open.spotify.com/intl-tr/artist/4EKDd2BkMjtPlGDfhmO1lc?si=bHKJPQoCS1qhtkN7zNOVQA'> <FaSpotify /> Spotify</a>
      </div>
      <div className='home-released-songs'>
        <h3>Yayımlanan Şarkılar</h3>
      </div>
      <div className='home-released-links'>
        <div className='thumbnail-container'>
          <a href='https://www.youtube.com/watch?v=pY1c1oyI51w'>
            <img src='https://img.youtube.com/vi/pY1c1oyI51w/maxresdefault.jpg' alt='kotu-bir-sarap'></img>
            <div className='overlay'>
              <div className='text'>Kötü Bir Şarap</div>
            </div>
          </a>
        </div>
        <div className='thumbnail-container'>
          <a href='https://www.youtube.com/watch?v=YZxEkdCn3Nw'>
            <img src='https://img.youtube.com/vi/YZxEkdCn3Nw/maxresdefault.jpg' alt='dogmayan-cocuklaim'></img>
            <div className='overlay'>
              <div className='text'>Doğmayan Çocuklarım</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
