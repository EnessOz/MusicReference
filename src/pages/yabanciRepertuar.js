import React, { useEffect, useState } from 'react';
import { Categories } from '../components/categories';

export const YabanciRepertuar = () => {
    const repertuarURL = '/data/repertuar.json';

    const [yabanciRepertuar, setYabanciRepertuar] = useState([]);

    useEffect(() => {
        fetch(repertuarURL)
            .then(response => response.json())
            .then(data => setYabanciRepertuar(data.yabanci))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='yabanci-container'>
            <div className='yabanci-container-categories'>
                <Categories href="/bati" text="Rock/Pop" />
                <Categories href="dogu" text="Geleneksel" />
            </div>
            <h3>Yabancı Repertuar</h3>
            <ul>
                {yabanciRepertuar.map((item, index) => (
                    <li key={index}>
                        <strong>Şarkı:</strong> {item.song} <strong>({item.artist})</strong>

                    </li>
                ))}
            </ul>
        </div>
    );
};
