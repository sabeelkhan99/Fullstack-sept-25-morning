import React, { useEffect, useState } from 'react'

const Carousel = () => {

    const images = [
        {
            id: 1,
            title: "Title 1",
            description: "Some Description 1",
            imageUrl: "https://plus.unsplash.com/premium_photo-1754426863493-3f5cd6d70e85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Title 2",
            description: "Some Description 2",
            imageUrl: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "Title 3",
            description: "Some Description 3",
            imageUrl: "https://images.unsplash.com/photo-1761839257961-4dce65b72d99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const [currIdx, setCurrIdx] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCurrIdx((prevState) => {
                if (prevState === images.length - 1) {
                    return 0;
                }
                return prevState + 1;
            })
        }, 2000);
    }, []);

    return (
        <div>
            <section className='carousel'>
                <img src={images[currIdx].imageUrl} alt={images[currIdx].title} />
                <h3>{images[currIdx].title}</h3>
                <p>{images[currIdx].description}</p>

                {/* Please implement prev and next functionality by your self */}
                <button>Next</button>
                <button>Prev</button>
            </section>
        </div>
    )
}

export default Carousel
