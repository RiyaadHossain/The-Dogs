import React from 'react';

const Dog = ({dog}) => {
    // console.log(props);
    const { name, image, life_span, height } = dog
    console.log(name, image.url, life_span, height.imperial);
    return (
        <div className='col-md-6 col-lg-4'>
            <div className='card p-4 border-3'>
                <div className='card-title'>
                    <h3>{ name}</h3>
                </div>
                <div className='card-body'>
                    <img className='w-75' src={image.url} alt="" />
                    <div className='mt-3 d-flex '>
                        <h5><strong>Life-Span:</strong> { life_span}</h5>
                        <h5><strong>Height:</strong> { height.imperial}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dog;