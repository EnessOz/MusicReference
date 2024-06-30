import React, { useEffect, useState } from 'react';
import { Categories } from '../components/categories';

export const TurkcePopRockRepertuar = () => {
    const repertuarURL = '/data/repertuar.json';

    const [batiRepertuar, setBatiRepertuar] = useState([]);

    useEffect(() => {
        fetch(repertuarURL)
            .then(response => response.json())
            .then(data => setBatiRepertuar(data.bati))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='rock-pop-container'>
            <div className='rock-pop-container-categories'>
                <Categories href="/dogu" text="Geleneksel" />
                <Categories href="yabanci" text="Yabancı" />
            </div>
            <h3>Rock-Pop Repertuar</h3>
            <ul>
                {batiRepertuar.map((item, index) => (
                    <li key={index}>
                        <strong>Şarkı:</strong> {item.song} <strong>({item.artist})</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};
