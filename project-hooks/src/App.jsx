import './App.css';

import ThemeProvider from './data/ThemeProvider';
import Lista from './ui/Lista';

function App() {
    return (
        <ThemeProvider>
            <div className='App'>
                <Lista />
            </div>
        </ThemeProvider>
    );
}

export default App;
