import { useRef } from 'react';
import './Contact.css';
import linkedinLogo from './assets/socials/linkedin512.png';
import githubLogo from './assets/socials/github512.png';
import youtubeLogo from './assets/socials/youtube512.png';
import facebookLogo from './assets/socials/facebook512.png';
import twitterLogo from './assets/socials/twitter512.png';

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
    return <a href={props.link} title={props.alt}><img src={props.src} alt={props.alt} /></a>
}

export default function Contact(props) {
    return (
        <div className="Contact">
            <div className="ContactTitle">
            </div>
                <h1>
                    Kontakt
                </h1>
            <hr />

            <h2>
                Email
            </h2>

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
                Telefon er en anden måde at kontakte mig. Jeg går i skole fuld tid og mine vågentimer kan variere,<br/>
                derfor garanterer jeg ikke jeg tager den første gang. Send da gerne en SMS, og jeg vil selvfølge ringe tilbage, hurtigst muligt.
            </h3>

            <TextClip>+45 6060 2456</TextClip>




            <hr />

            <h2>Sociale Medier</h2>

            <div id="socialLinks">
                <Social src={linkedinLogo} alt={'LinkedIn Profil'} link={'https://www.linkedin.com/in/simon-from-jakobsen-95b3a81ba/'} ></Social>
                <Social src={githubLogo} alt={'GitHub Profil'} link={'https://github.com/SimonFJ20'} ></Social>
                <Social src={youtubeLogo} alt={'YouTube Profil'} link={'https://www.youtube.com/channel/UC5kviVFkYpoWzvWhpBJsNtw'} ></Social>
                <Social src={facebookLogo} alt={'Facebook Profil'} link={'https://www.facebook.com/profile.php?id=100006281927991'} ></Social>
                <Social src={twitterLogo} alt={'Twitter Profil'} link={'https://www.linkedin.com/in/simon-from-jakobsen-95b3a81ba/'} ></Social>
            </div>


            <hr />
            <h1>
                Jeg søger Praktikplads
            </h1>
            <h2>
                Jeg søger lige nu (siden 23-03-2021) praktikplads, som Datatekniker med speciale i programmering<br/>
                Det gør jeg, fordi jeg lige nu er under uddannelse i EUX på Mercantec Gymnasium i Viborg, som Datatekniker.<br/>
                Hvis du som firma søger en Datateknikerlærling med speciale i programmering,<br/> så er du meget velkommen
                til at kontakte mig. <br/>
                Se siden <span className="ContactInlineLink" onClick={() => {props.setPage('/contact')}}>'Kontakt'</span>, for mere information.
            </h2>
            <br/><br/>
        </div>
    );
}
