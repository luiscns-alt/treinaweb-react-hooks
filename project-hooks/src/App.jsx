import { useEffect, useState } from 'react';
import './App.css';

import ThemeProvider from './data/ThemeProvider';
import useDebounce from './hooks/useDebounce';

function App() {
    const [text, setText] = useState('');
    const myText = useDebounce(text, 1000);

    useEffect(() => {
        console.log(text);
    }, [myText]);

    return (
        <ThemeProvider>
            <input
                onChange={(event) => setText(event.target.value)}
                type='text'
            />
            <br />
            <div>{myText}</div>
        </ThemeProvider>
    );
}

export default App;
