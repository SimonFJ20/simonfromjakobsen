import './Home.css';
import desktopLogo from './assets/desktopLogo.svg';
import webLogo from './assets/webLogo.svg';
import videogameLogo from './assets/videogameLogo.svg';
import serverLogo from './assets/serverLogo.svg';
import hardwareLogo from './assets/hardwareLogo.svg';

//import backgroundImage from 'https://i.ibb.co/YD903Ys/c0.jpg';

export default function Home() {
    return (
        <div className="Home">
            <div className="HomeTitle">
                <h1 className="title">
                    Simon From Jakobsen
                </h1>
                <h3 className="underTitle">
                    17 år gammel, studerende, programmør
                </h3>
            </div>
                <h1>
                    Interresse for Fullstack Softwareudvikling
                </h1>
            <h2>
                Jeg interesserer mig meget for IT og computere, specielt hardware- og softwareudvikling.<br/>
                Jeg har udviklet både software og hardware i flere år, som en hobby i min fritid, <br/>
                og jeg har derfor både erfaring og en god sans for faget.<br/>
                Jeg er under uddannelse som EUX/Datatekniker med speciale i programmering.
            </h2>
            <hr />
            <h1>
                Hvad jeg har arbejdet med
            </h1>
            <div id="services">
                <img src={desktopLogo} alt="Desktop Apps" />
                <img src={webLogo} alt="Web Apps" />
                <img src={videogameLogo} alt="Video Spil" />
                <img src={serverLogo} alt="Server Håndering" />
                <img src={hardwareLogo} alt="Hardware Fremstilling" className="last"/>
                <h3>PC Applikationer med Java og .NET</h3>
                <h3>Webapps med ReactJS, Express og MongoDB</h3>
                <h3>Spiludvikling med Java og TypeScript</h3>
                <h3>Opsætning og håndtering af Webservere med Linux</h3>
                <h3>Design og fremstilling af Hardwareløsninger</h3>
            </div>
        </div>
    );
}
