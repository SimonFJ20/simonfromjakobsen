import { useRef } from 'react';
import './Contact.css';
import linkedinLogo from '../assets/socials/linkedin512.png';
import githubLogo from '../assets/socials/github512.png';
import youtubeLogo from '../assets/socials/youtube512.png';
import facebookLogo from '../assets/socials/facebook512.png';
import twitterLogo from '../assets/socials/twitter512.png';

const copyText = (ref) => {
    try {
        const node = ref.current;
        if(document.body.createTextRange){
            const range = document.body.createTextRange();
            range.moveToElementText(node);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.warn('Copy to clipbaord not supported by browser.');
        }
        document.execCommand('copy');
    } catch {
        console.warn('Something when wrong trying to copy to clipboard.');
    }
}

const TextClip = (props) => {
    const ref = useRef(null);
    return <div><pre><code ref={ref} >{props.children}</code></pre>
    <button id="copy" onClick={() => {copyText(ref)}} onKeyUp={(event) => {if(event.key === 'Enter') event.target.click();}} >Kopier</button></div>
}

const Social = (props) => {
    return <a href={props.link} title={props.alt} target="blank"><img src={props.src} alt={props.alt} /></a>
}

export default function Contact(props) {
    return (
        <div className="Contact">
            <div className="ContactTitle">
            </div>
                <h1>
                    Kontakt
                </h1>
            

            <div id="socialLinks">
                <Social src={linkedinLogo} alt={'LinkedIn Profil'} link={'https://www.linkedin.com/in/simon-from-jakobsen-95b3a81ba/'} ></Social>
                <Social src={githubLogo} alt={'GitHub Profil'} link={'https://github.com/SimonFJ20'} ></Social>
                <Social src={youtubeLogo} alt={'YouTube Profil'} link={'https://www.youtube.com/channel/UC5kviVFkYpoWzvWhpBJsNtw'} ></Social>
                <Social src={facebookLogo} alt={'Facebook Profil'} link={'https://www.facebook.com/profile.php?id=100006281927991'} ></Social>
                <Social src={twitterLogo} alt={'Twitter Profil'} link={'https://www.twitter.com/simonfj20/'} ></Social>
            </div>

            <hr />

            <h2>Email</h2>

            <h3>
                Email er den bedste m??de at komme i kontakt med mig, jeg l??ser mails flere gange om dagen.<br/>
                En mail sendt til min private- eller skole-email vil blive l??st indenfor 24 timer.
            </h3>

            <TextClip>simonfromjakobsen@gmail.com</TextClip>
            <TextClip>simo843q@edu.mercantec.dk</TextClip>

            <br/>

            <h2>
                Telefon
            </h2>

            <h3>
                Telefon er en anden m??de at kontakte mig.<br/>
                Dog g??r jeg i skole fuld tid, og jeg kan derfor ikke altid svarer f??rst gang.<br/>
                Men send gerne en SMS, og jeg vil selvf??lge ringe tilbage, hurtigst muligt.
            </h3>

            <TextClip>+45 6060 2456</TextClip>




            <hr />

            


            <div id="praktikpladsGrid">

                <div>

                    <h2>
                        Hvorfor s??ger jeg praktikplads?
                    </h2>
                    <h3>
                        Jeg er i f??rd med at tage en EUX, som datatekniker.
                        En EUX uddannelse er en HTX eksamen og et svendebrev.
                        Til den gymnasielle del, g??r jeg i skole, som normalt p?? et gymnasie.
                        Men for at f?? svendebrevet skal jeg i praktik i et firma.
                        Derfor har jeg brug for en praktikplads.
                    </h3>

                    <hr/>

                    <h2>
                        Hvorfor speciale i programmering?
                    </h2>
                    <h3>
                        Jeg har i flere ??r brugt lang tid p?? at programmere.
                        Jeg er selvl??rt i programmering, og startede for ca. seks ??r siden.
                        Jeg har arbejdet med mange forskellige emner fra hjemmesider til firmware til hjemmelavet hardware.
                        Derfor f??ler jeg at programmeringsretningen, for mig, er at fortr??kke, fremfor infrastruktur.
                    </h3>

                    <hr/>

                    <h2>
                        Hvad kan jeg tilbyde?
                    </h2>
                    <h3>
                        Jeg kan tilbyde et ??bent og enthusiastisk mindset. 
                        Jeg vil m??de til tiden og vise interesse og deltagelse.
                        Siden jeg allerede kan navigere computerfaget med okay kompetence, 
                        vil jeg ikke heller ikke v??re helt ny til faget.
                        Jeg kan tilbyde professionel, respekterende opf??rsel og aktiv deltagelse i et professionelt erhvervsmilj??.
                    </h3>
                </div>

                
                <div>
                    <hr/>

                    <h2>
                        Hvorfor datatekniker?
                    </h2>
                    <h3>
                        Jeg har lige siden jeg var lille, haft en stor interesse indenfor teknik, elektronik og computere.
                        Jeg bruger meget af min fritid, p?? at arbejde med forskellige emner indenfor computerfaget.
                        Derfor f??ler jeg at datatekniker uddannelsen passer mig godt.
                    </h3>

                    <hr/>

                    <h2>
                        Praktikpladsens placering
                    </h2>
                    <h3>
                        Lige nu, bor jeg i Viborg. Jeg g??r ogs?? i skole her i Viborg.
                        Efter sommerferien (2021) skal jeg halv??rligt skifte mellem praktikpladsen og skole,
                        hvor skoledelen foreg??r i Viborg. Derfor vil jeg foretr??kke praktikpladser, som ikke er l??ngere v??k end 1?? time fra Viborg.
                        Med mindre en aftale om bosted kan blive gennemf??rt.
                        Men lige meget hvor lokationen befinder sig, er I altid velkommen til at kontakte mig.
                    </h3>
                </div>

            
            </div>

            <h3>Kontakt mig p?? Email eller Telefon. Se toppen</h3>

            <hr/>

            <br/><br/>
        </div>
    );
}
