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
                <h1 className="title">Simon From Jakobsen</h1>
                <h3 className="underTitle">
                    Fullstack software-udvikler og -programmør, <br></br>
                    med kompentence i IT-faget
                </h3>
            </div>
            <h1>Fullstack Programmør og Softwareudvikler</h1>
            <h2>
                Jeg er en talentfuld Fullstack softwareudvikler og -programmør.
                Jeg har erfaring med alt fra hjemmesideudvikling til
                hardwaredesign.
                <br />
                Min brede erfaring gør at jeg kan udvikle flexible og robuste
                løsninger. På en pragmatisk, altomfattende og ambitiøs måde.
            </h2>
            <hr />
            <h1>Færdigheder</h1>
            <div id="services">
                <img src={desktopLogo} alt="Desktop Apps" />
                <img src={webLogo} alt="Web Apps" />
                <img src={videogameLogo} alt="Video Spil" />
                <img src={serverLogo} alt="Server Håndering" />
                <img
                    src={hardwareLogo}
                    alt="Hardware Fremstilling"
                    className="last"
                />
                <h3>PC Applikationer med Java og .NET</h3>
                <h3>Webapps med ReactJS, Express og MongoDB</h3>
                <h3>Spiludvikling med Java og Unity</h3>
                <h3>Opsætning og håndtering af webservere med Linux</h3>
                <h3>Design og fremstilling af Hardwareløsninger</h3>
            </div>
        </div>
    );
}
