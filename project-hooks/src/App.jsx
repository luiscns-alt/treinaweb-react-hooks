import './App.css';

import ThemeProvider from './data/ThemeProvider';
import useOnlineStatus from './hooks/useOnlineStatus';

function App() {
    const isOnline = useOnlineStatus();

    return (
        <ThemeProvider>
            <div>{isOnline ? 'Você está conectado' : 'Você desconectou'}</div>
        </ThemeProvider>
    );
}

export default App;
