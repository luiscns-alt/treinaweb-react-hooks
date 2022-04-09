import React from 'react';
import './App.css';

import ThemeProvider from './data/ThemeProvider';
import Teste from './ui/Teste';
import Lista from './ui/Lista';
import ExemploUseCallback from './ui/ExemploUseCallback';

function App() {
    return (
        <ThemeProvider>
            <div className='App'>
                <ExemploUseCallback />
            </div>
        </ThemeProvider>
    );
}

export default App;
