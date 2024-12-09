import React from 'react';
import './App.css';
import Header from './components/Header/Header';

const App: React.FC = () => {
    const images = ["/kitchen_1.jpg", "/kitchen_2.jpg", "/kitchen_3.jpg", "lobby.jpg"]; // Removed the empty string for cleaner rendering

    return (
        <div >
            <Header />

            <main>
                <div className="content-container"
                    // style={{
                    //     display: 'flex',
                    //     flexDirection: 'column',
                    //     alignItems: 'center',
                    //     gap: '20px', // Add spacing between images
                    //     marginTop: 20,
                    // }}
                >
                    {/* Dynamically Render Images */}
                    {images.map((image, index) => (
                        <img
                            key={index} // Add a unique key for each image
                            className="office-image"
                            src={image}
                            alt={`Office ${index + 1}`}
                            style={{ width: '500px', height: 'auto', borderRadius: '10px' }}
                        />
                    ))}
                </div>

                {/* <h1
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Outfit',
                        color: 'gray',
                        letterSpacing: 5,
                        fontSize: 55,
                        marginTop: 30,
                    }}
                >
                    Office Sušilova
                </h1> */}
            </main>
        </div>
    );
};

export default App;