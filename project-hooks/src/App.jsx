import { useEffect, useRef } from 'react';
import './App.css';

import ThemeProvider from './data/ThemeProvider';
import useOnScreen from './hooks/useOnScreen';

function App() {
    const element = useRef();
    const isVisible = useOnScreen(element);

    useEffect(() => {
        console.log(isVisible);
    }, [isVisible]);

    return (
        <ThemeProvider>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div ref={element}>TreinaWeb</div>
        </ThemeProvider>
    );
}

export default App;
