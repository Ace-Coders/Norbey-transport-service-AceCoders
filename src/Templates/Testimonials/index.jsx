import React from 'react';

// Import custom styles
import { TestimonialsContainer } from './styles';

const Testimonials = () => {

    const dummyArray = [1,1,1];

    return (
        <TestimonialsContainer>
            <h2>Testimonials</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi minus facilis, atque facere eum praesentium culpa doloremque a sapiente ipsa laborum ut at dolorem. Velit debitis quo repellendus soluta.</p>

            <div className='testimonials__cards'>

                {/* Comillas components */}

                <div className='testimonials__cards'>
                    
                    {/* Example container */}

                    { dummyArray.map((e, i) => (
                        <div className='testimonials__cards__card' key={i}>
                            <img 
                                className='comment-img' 
                                src="/ContentPage/iconComillas.png" 
                                alt="Comment log" 
                            />   

                            <img  
                                className="person-img" 
                                src="/ContentPage/Ellipse 2.png" 
                                alt="Person testimonial" 
                            />

                            <div className='texts'>
                                <h4>Name Testimonial</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesettingas betrys sta oived not.</p>
                            </div>
                        </div>
                    )) }


                </div>
            </div>
        </TestimonialsContainer>
    );
};

export { Testimonials };