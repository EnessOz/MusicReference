import React, { useEffect, useState } from 'react';
import { Categories } from '../components/categories';

export const TurkuRepertuar = () => {
    const repertuarURL = '/data/repertuar.json';

    const [doguRepertuar, setDoguRepertuar] = useState([]);

    useEffect(() => {
        fetch(repertuarURL)
            .then(response => response.json())
            .then(data => setDoguRepertuar(data.dogu))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='dogu-container'>
            <div className='dogu-container-categories'>
                <Categories href="/bati" text="Rock/Pop " />
                <Categories href="yabanci" text="Yabancı " />
            </div>
            <h3>Geleneksel Repertuar</h3>
            <ul>
                {doguRepertuar.map((item, index) => (
                    <li key={index}>
                        <strong>Şarkı:</strong> {item.song} <strong>({item.artist})</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};
