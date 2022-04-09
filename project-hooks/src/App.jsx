import './App.css';

import ThemeProvider from './data/ThemeProvider';
import useWindowSize from './hooks/useWindowSize';

function App() {
    const windowSize = useWindowSize();

    return (
        <ThemeProvider>
            Largura: {windowSize.width}
            <br />
            Altura: {windowSize.height}
        </ThemeProvider>
    );
}

export default App;
