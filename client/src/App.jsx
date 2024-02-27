import React from 'react';
import Header from './components/Layout/Header';
import Body from './components/Layout/Body';
import Footer from './components/Layout/Footer';

function App() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <Header />
                <Body />
            </div>
            <Footer />
        </div>
    );
}

export default App;
