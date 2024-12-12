import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import FloorPlan from './components/FloorPlan/FloorPlan';

const App: React.FC = () => {
    const images = ["/kitchen_1.jpg", "/kitchen_2.jpg", "/kitchen_3.jpg", "lobby.jpg"]; // Removed the empty string for cleaner rendering

    return (
        <div >
            <Header />

            <main style={{display: 'flex', justifyContent: 'center'}}>
                <div className="content-container">
                    <FloorPlan />
                    <Gallery />

                    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5205.425152415423!2d16.598723694855545!3d49.207103857902155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129441853329b9%3A0x6f4a1d62f19b17c8!2zU3XFoWlsb3ZhIDc3My8xNiwgNjAyIDAxIEJybm8tc3TDpGVkLVZldmVyw60!5e0!3m2!1sen!2scz!4v1697116803383!5m2!1sen!2scz"
    width="100%"
    height="450px"
    style={{ border: 0, filter: "grayscale(60%)", marginBottom: "100px" }}
    loading="lazy"  ></iframe>
                </div>

            
            </main>
        </div>
    );
};

export default App;