import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from '../pages/homePage';
import { TurkcePopRockRepertuar } from '../pages/turkcePopRockRepertuar';
import { TurkuRepertuar } from '../pages/turkuRepertuar';
import { YabanciRepertuar } from '../pages/yabanciRepertuar';
import { EkipPage } from '../pages/ekipPage';


export const RouterPage = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/bati' element={<TurkcePopRockRepertuar />}></Route>
            <Route path='/dogu' element={<TurkuRepertuar />}></Route>
            <Route path='/yabanci' element={<YabanciRepertuar />}></Route>
            <Route path='/ekip' element={<EkipPage/>}/>
        </Routes>
    );
};
