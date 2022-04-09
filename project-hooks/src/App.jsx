import { useState } from 'react';
import './App.css';

import ThemeProvider from './data/ThemeProvider';
import useLocalStorage from './hooks/seLocalStorage';
import useUndo from './hooks/useUndo';

function App() {
    const [counter, setCounter] = useState(0);
    const prevValue = useUndo(counter);

    return (
        <ThemeProvider>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <div>Valor Anterior: {prevValue}</div>
            <button onClick={() => setCounter(prevValue)}>Voltar</button>
        </ThemeProvider>
    );
}

export default App;
