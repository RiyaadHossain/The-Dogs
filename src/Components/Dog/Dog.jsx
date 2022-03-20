import React from 'react';
import DogModal from '../DogModal/DogModal';

const Dog = ({dog}) => {
    // console.log(props);
    const { name, image, life_span, height } = dog
    return (
        <div className='col-md-6 col-lg-4'>
            <div className='card p-4 border-3'>
                <div className='card-title'>
                    <h3>{ name}</h3>
                </div>
                <div className='card-body'>
                    <img className='w-75' src={image.url} alt="" />
                    <div className='mt-3 d-flex flex-column aalign-items-start justify-content-start'>
                        <h5><strong>Life-Span:</strong> { life_span}</h5>
                        <h5 className='mb-3' ><strong>Height:</strong> {height.imperial}</h5>
                        <DogModal dog={dog}></DogModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dog;