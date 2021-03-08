import './Footer.css';
import githubLogo from '../assets/github-logo512.png';
import linkedInLogo from '../assets/linkedin-logo512.png';

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
                        <a
                            href="https://www.linkedin.com/in/simon-from-jakobsen-95b3a81ba/"
                            target="blank"
                        >
                            Simon From Jakobsen
                        </a>
                    </div>
                </Social>
            </div>
        </div>
    );
}
