import './Footer.css';
import githubLogo from '../assets/github-logo512.png';
import linkedInLogo from '../assets/linkedin-logo512.png';
import emailLogo from '../assets/mail-512.png';
import phoneLogo from '../assets/phone-68-512.png';

function Social(props) {
    return <div className="SocialElement">{props.children}</div>;
}

export default function Footer(props) {
    return (
        <div className="Footer">
            <h2>Simon From Jakobsen</h2>
            <div className="Social">
                <Social>
                    <img src={githubLogo} alt="Github"></img>
                </Social>
                <Social>
                    <div className="SocialLink">
                        <a href="https://github.com/SimonFJ20" target="blank">
                            SimonFJ20
                        </a>
                    </div>
                </Social>

                <Social>
                    <img src={linkedInLogo} alt="LinkedIn"></img>
                </Social>
                <Social>
                    <div className="SocialLink">
                        <a href="https://www.linkedin.com/in/simon-from-jakobsen-95b3a81ba/" target="blank">
                            Simon From Jakobsen
                        </a>
                    </div>
                </Social>

                <Social>
                    <img src={emailLogo} alt="LinkedIn"></img>
                </Social>
                <Social>
                    <div className="SocialLink">
                        <span className="notlink">
                            simonfromjakobsen@gmail.com
                        </span>
                    </div>
                </Social>

                <Social>
                    <img src={phoneLogo} alt="LinkedIn"></img>
                </Social>
                <Social>
                    <div className="SocialLink">
                        <span className="notlink">
                            +45 6060 2456
                        </span>
                    </div>
                </Social>
            </div>
        </div>
    );
}
