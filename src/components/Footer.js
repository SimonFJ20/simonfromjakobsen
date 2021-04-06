import './Footer.css';
import githubLogo from '../assets/github-logo512.png';
import linkedInLogo from '../assets/linkedin-logo512.png';
import emailLogo from '../assets/mail-512.png';
import phoneLogo from '../assets/phone-68-512.png';

let githubLink = 'https://github.com/SimonFJ20';
let linkedInLink = 'https://www.linkedin.com/in/simon-from-jakobsen-95b3a81ba/';

function Social(props) {

    if('link' in props) return <a href={props.link} target="blank"><div className="SocialElement">
        <img alt={props.alt} src={props.src}/>
        <h2>{props.children}</h2>
    </div></a>;
    else return <div className="SocialElement">
        <img alt={props.alt} src={props.src}/>
        <h2>{props.children}</h2>
    </div>;
}

export default function Footer(props) {
    return (
        <div className="Footer">
            <h2>Simon From Jakobsen</h2>
            <div className="Social">
                <Social src={githubLogo} alt={'github'} link={githubLink} >SimonFJ20</Social>
                <Social src={linkedInLogo} alt={'linkedIn'} link={linkedInLink} >Simon From Jakobsen</Social>
                <Social src={emailLogo} alt={'email'} >simonfromjakobsen@gmail.com</Social>
                <Social src={phoneLogo} alt={'mobile phone number'} > +45 6060 2456</Social>
            </div>
            <p className="madeby">Siden er lavet af Simon From Jakobsen</p>
        </div>
    );
}
