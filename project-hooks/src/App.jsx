import './App.css';

import ThemeProvider from './data/ThemeProvider';
import useLocalStorage from './hooks/seLocalStorage';

function App() {
    const [counter, setCounter] = useLocalStorage('counter', 1);

    return (
        <ThemeProvider>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </ThemeProvider>
    );
}

export default App;
