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

            <main>
                <div className="content-container">
                    <FloorPlan />
                    <Gallery />
                </div>

            
            </main>
        </div>
    );
};

export default App;