import React from 'react';

const Dog = ({dog}) => {
    // console.log(props);
    const { name, image, life_span, height } = dog
    console.log(name, image.url, life_span, height.imperial);
    return (
        <div>
            
        </div>
    );
};

export default Dog;