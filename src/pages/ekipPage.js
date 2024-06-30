import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { GiGuitarBassHead, GiGuitarHead, GiBanjo, GiDrumKit, GiPianoKeys } from "react-icons/gi";
import { PiMicrophoneStageLight, PiMicrophoneStageFill } from "react-icons/pi";
import { LiaGuitarSolid } from "react-icons/lia";
export const EkipPage = () => {
  return (
    <div className='ekip-container'>
      <div className='ekip-inside'>
        <img src='/photos/eo-avatar.png' alt='enes'></img>
        <div className='ekip-texts'>
          <a href='https://www.instagram.com/enesozmusic' className='button-74'>Enes Öz <FaSquareInstagram /></a>
          <strong>Vokal <PiMicrophoneStageFill /></strong>
          <strong>Gitar <GiGuitarHead /></strong>
          <strong>Mızıka <GiPianoKeys /></strong>
        </div>
      </div>
      <div className='ekip-inside'>
        <img src='/photos/devran.png' alt='devran'></img>
        <div className='ekip-texts'>
          <a href='https://www.instagram.com/devranalmak' className='button-74'>Devran Almak <FaSquareInstagram /></a>
          <strong>Buzuki <GiBanjo /></strong>
          <strong>Bağlama <LiaGuitarSolid /></strong>
          <strong>Back Vokal <PiMicrophoneStageLight /></strong>
        </div>
      </div>
      <div className='ekip-inside'>
        <img src='/photos/gurur.jpeg' alt='gurur'></img>
        <div className='ekip-texts'>
          <a href='https://www.instagram.com/saylang' className='button-74'>Gurur Saylan <FaSquareInstagram /></a>
          <strong>Bateri <GiDrumKit /></strong>
          <strong>Back Vokal <PiMicrophoneStageLight /></strong>
        </div>
      </div>
      <div className='ekip-inside'>
        <img src='/photos/okan.jpeg' alt='okan'></img>
        <div className='ekip-texts'>
          <a href='https://www.instagram.com/burgusuzbassist' className='button-74'>Okan Aydın <FaSquareInstagram /></a>
          <strong>Bas Gitar <GiGuitarBassHead /></strong>
          <strong>Back Vokal <PiMicrophoneStageLight /></strong>
        </div>
      </div>
    </div>
  )
}
