import { useEffect } from 'react';
import './App.css';

import ThemeProvider from './data/ThemeProvider';

function App() {
    const keyA = useKeyPress('a');
    const keyB = useKeyPress('b');

    useEffect(() => {
        if (keyA) {
            // alguma coisa
        }
    }, [keyA]);

    return (
        <ThemeProvider>
            {keyA && 'A'}
            {keyB && 'B'}
        </ThemeProvider>
    );
}

export default App;
