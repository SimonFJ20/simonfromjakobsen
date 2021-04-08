import { useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navigator from './components/Navigator';
import Site from './components/Site';
import Topbar from './components/Topbar';

export default function App() {
    const [page, setPage] = useState(window.location.pathname);
    if(page === '/') setPage('/home');

    const appDiv = useRef(null);
    const scroolToTopIfNotNull = () => {
        try {
            appDiv.current.scrollTo(0, 0)
        } catch {
            
        }
    }

    return (
        <div className="App" ref={appDiv} onLoad={scroolToTopIfNotNull()} >
            <div className="AppTop">
                <Topbar></Topbar>
                <Navigator page={page} setPage={setPage}></Navigator>
            </div>
            <Site page={page} setPage={setPage} />
            <Footer />
        </div>
    );
}
