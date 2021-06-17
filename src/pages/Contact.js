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
    <button id="copy" onClick={() => {copyText(ref)}} >Kopier</button></div>
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
                Email er den bedste måde at komme i kontakt med mig, jeg læser mails flere gange om dagen.<br/>
                En mail sendt til min private- eller skole-email vil blive læst indenfor 24 timer.
            </h3>

            <TextClip>simonfromjakobsen@gmail.com</TextClip>
            <TextClip>simo843q@edu.mercantec.dk</TextClip>

            <br/>

            <h2>
                Telefon
            </h2>

            <h3>
                Telefon er en anden måde at kontakte mig.<br/>
                Dog går jeg i skole fuld tid, og jeg kan derfor ikke altid svarer først gang.<br/>
                Men send gerne en SMS, og jeg vil selvfølge ringe tilbage, hurtigst muligt.
            </h3>

            <TextClip>+45 6060 2456</TextClip>




            <hr />

            


            <div id="praktikpladsGrid">

                <div>

                    <h2>
                        Hvorfor søger jeg praktikplads?
                    </h2>
                    <h3>
                        Jeg er i færd med at tage en EUX, som datatekniker.
                        En EUX uddannelse er en HTX eksamen og et svendebrev.
                        Til den gymnasielle del, går jeg i skole, som normalt på et gymnasie.
                        Men for at få svendebrevet skal jeg i praktik i et firma.
                        Derfor har jeg brug for en praktikplads.
                    </h3>

                    <hr/>

                    <h2>
                        Hvorfor speciale i programmering?
                    </h2>
                    <h3>
                        Jeg har i flere år brugt lang tid på at programmere.
                        Jeg er selvlært i programmering, og startede for ca. seks år siden.
                        Jeg har arbejdet med mange forskellige emner fra hjemmesider til firmware til hjemmelavet hardware.
                        Derfor føler jeg at programmeringsretningen, for mig, er at fortrække, fremfor infrastruktur.
                    </h3>

                    <hr/>

                    <h2>
                        Hvad kan jeg tilbyde?
                    </h2>
                    <h3>
                        Jeg kan tilbyde et åbent og enthusiastisk mindset. 
                        Jeg vil møde til tiden og vise interesse og deltagelse.
                        Siden jeg allerede kan navigere computerfaget med okay kompetence, 
                        vil jeg ikke heller ikke være helt ny til faget.
                        Jeg kan tilbyde professionel, respekterende opførsel og aktiv deltagelse i et professionelt erhvervsmiljø.
                    </h3>
                </div>

                
                <div>
                    <hr/>

                    <h2>
                        Hvorfor datatekniker?
                    </h2>
                    <h3>
                        Jeg har lige siden jeg var lille, haft en stor interresse indenfor teknik, elektronik og computere.
                        Jeg bruger meget af min fritid, på at arbejde med forskellige emner indenfor computerfaget.
                        Derfor føler jeg at datatekniker uddannelsen passer mig godt.
                    </h3>

                    <hr/>

                    <h2>
                        Praktikpladsens placering
                    </h2>
                    <h3>
                        Lige nu, bor jeg i Viborg. Jeg går også i skole her i Viborg.
                        Efter sommerferien (2021) skal jeg halvårligt skifte mellem praktikpladsen og skole,
                        hvor skoledelen foregår i Viborg. Derfor vil jeg foretrække praktikpladser, som ikke er længere væk end 1½ time fra Viborg.
                        Med mindre en aftale om bosted kan blive gennemført.
                        Men lige meget hvor lokationen befinder sig, er I altid velkommen til at kontakte mig.
                    </h3>
                </div>

            
            </div>

            <h3>Kontakt mig på Email eller Telefon. Se toppen</h3>

            <hr/>

            <br/><br/>
        </div>
    );
}
