import './Home.css';
import desktopLogo from '../assets/desktopLogo.svg';
import webLogo from '../assets/webLogo.svg';
import videogameLogo from '../assets/videogameLogo.svg';
import serverLogo from '../assets/serverLogo.svg';
import hardwareLogo from '../assets/hardwareLogo.svg';

export default function Home(props) {
    return (
        <div className="Home">
            <div className="HomeTitle">
                <h1 className="title">
                    Simon From Jakobsen
                </h1>
                <h3 className="underTitle">
                    17 år, studerende, programmør
                </h3>
            </div>
                <h1>
                    Interesse for Fullstack Softwareudvikling
                </h1>
            <h2>
                Jeg interesserer mig meget for IT og computere, specielt hardware- og softwareudvikling.<br/>
                Jeg har udviklet både software og hardware i flere år, som en hobby i min fritid, <br/>
                og jeg har derfor både erfaring og en god sans for faget.<br/>
                Jeg er under uddannelse som EUX/Datatekniker med speciale i programmering,<br/>
                og jeg søger derfor praktikplads, mere information nederst på siden.
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
                <h3>PC Applikationer med Java og C# .NET</h3>
                <h3>Webapps med ReactJS, Express og MongoDB</h3>
                <h3>Spiludvikling med Java og TypeScript</h3>
                <h3>Opsætning og håndtering af Webservere med Linux</h3>
                <h3>Design og fremstilling af Hardwareløsninger</h3>
            </div>
            <hr />
            <h1>
                Jeg søger Praktikplads
            </h1>
            <h2>
                Jeg søger lige nu (siden 23-03-2021) praktikplads, som Datatekniker med<br/>
                speciale i programmering. Det gør jeg, fordi jeg lige nu er under uddannelse<br/>
                i EUX på Mercantec Gymnasium i Viborg, som Datatekniker.<br/>
                Hvis du som firma søger en Datateknikerlærling med<br/>
                speciale i programmering, så er du meget velkommen
                til at kontakte mig. <br/>
                Se siden <span tabIndex="0" className="InlineLink" onClick={() => {props.setPage('/contact')}} onKeyUp={(event) => {if(event.key === 'Enter') event.target.click();}}>Kontakt</span>, for mere information.
            </h2>
            <br/><br/>
        </div>
    );
}
