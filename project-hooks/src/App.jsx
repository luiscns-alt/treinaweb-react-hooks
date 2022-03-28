import React from 'react';
import './App.css';

import ThemeProvider from './data/ThemeProvider';
import Teste from './ui/Teste';
import Lista from "./ui/Lista";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Lista />
            </div>
        </ThemeProvider>
    );
}

export default App;
