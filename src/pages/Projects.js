import { useState } from 'react';
import ProjectReader from '../components/ProjectReader';
import './Projects.css';

const ProjectCard = (props) => {
    return <div tabIndex="0" className="ProjectCard" 
    onClick={() => {props.setReaderHtml('/projects/' + props.html); props.setReaderShown(true)}} 
    onKeyUp={(event) => {if(event.key === 'Enter') event.target.click();}}
    >
        {props.children}
    </div>
}

export default function Projects(props) {
    const [readerShown, setReaderShown] = useState(false);
    const [readerHtml, setReaderHtml] = useState(null);

    return (
        <div className="Projects">

            <ProjectReader show={readerShown} html={readerHtml} closeReader={() => setReaderShown(false)} ></ProjectReader>

            <div className="ProjectsTitle">
            </div>
                <h1>
                    Projekter
                </h1>
            <h2>
                På denne side finder du forskellige af mine personlige projekter.<br/>
            </h2>
            <hr />
            <div id="projectsGrid">

                <ProjectCard html="wolfenstein.html" setReaderShown={setReaderShown} setReaderHtml={setReaderHtml} >
                    <h1>3D Rendering</h1>
                    <h2>3D rendering ligesom Wolfenstein</h2>
                    <h4>C++, JavaScript</h4>
                    <p>
                        Jeg havde fri en weekend, så jeg eksperimenterede med
                        3D rendering, ligesom det gamle Wolfenstein spil.
                    </p>
                </ProjectCard>
                
                <ProjectCard html="messanger.html" setReaderShown={setReaderShown} setReaderHtml={setReaderHtml} >
                    <h1>MessAnger</h1>
                    <h2>En lille chat applikation</h2>
                    <h4>HTML, CSS, JavaScript, TypeScript, NodeJS, ExpressJS, MongoDB</h4>
                    <p>
                        På Datatekniker EUD afdelingen, fik vi en opgave, som lød på, at
                        vi skulle lave en App. Vi måtte selv bedste metode og programmeringssprog.
                        Vi fik 4 dage til det. 
                    </p>
                </ProjectCard>

                <ProjectCard html="simonfromjakobsen.html" setReaderShown={setReaderShown} setReaderHtml={setReaderHtml} >
                    <h1>Denne Side</h1>
                    <h2>Min egen personlige hjemmeside</h2>
                    <h4>ReactJS, JavaScript, CSS, HTML</h4>
                    <p>
                        Denne side du befinder dig på nu, hvorpå indholdet primært består af
                        information om mig selv, er en hjemmeside jeg har lavet, over nogle uger,
                        primært for at vise mine computerskills af til folk.
                    </p>
                </ProjectCard>

            </div>

        </div>
    );
}
