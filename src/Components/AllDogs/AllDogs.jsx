import React, { useEffect, useState } from 'react';
import Dog from '../Dog/Dog';

const AllDogs = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])
    return (
        <div className='row g-4 container m-auto'>
            {dogs.map(dog => <Dog dog={dog}></Dog>)}
        </div>
    );
};

export default AllDogs;