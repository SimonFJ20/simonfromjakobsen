import { useState } from 'react';
import ProjectReader from '../components/ProjectReader';
import './Projects.css';

export function ProjectCard(props) {
    return <div className="ProjectCard" style={{backgroundColor: props.color}}>
        <div className="cardImage" style={{backgroundImage: `url("${props.imageUrl}")`}} ></div>
        <h2>
            Projekt Titel
        </h2>
        <h3>
            Dette er et projekt jeg gerne vil dele
        </h3>
    </div>
}

export default function Projects(props) {
    const { readerState, setReaderState } = useState(false);
    const { readerHtml, setReaderHtml } = useState(null);

    const setReader = (link) => {
        setReaderHtml = link;
        setReaderState = true;
    }

    return (
        <div className="Projects">
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
                <ProjectCard 
                    color={'rgb(200, 100, 100)'} 
                    imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} 
                    onClick={() => setReader('/projects/messanger.html')} >
                </ProjectCard>
                <ProjectCard 
                    color={'rgb(200, 200, 100)'} 
                    imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} 
                    onClick={() => setReader('/projects/messanger.html')} >

                </ProjectCard>
                <ProjectCard 
                    color={'rgb(200, 100, 200)'} 
                    imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} 
                    onClick={() => setReader('/projects/messanger.html')} >

                </ProjectCard>
                <ProjectCard 
                    color={'rgb(100, 200, 100)'} 
                    imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} 
                    onClick={() => setReader('/projects/messanger.html')} >

                </ProjectCard>
                <ProjectCard 
                    color={'rgb(100, 200, 200)'} 
                    imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} 
                    onClick={() => setReader('/projects/messanger.html')} >

                </ProjectCard>
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
                Se siden <span className="ProjectsInlineLink" onClick={() => {props.setPage('/contact')}}>'Kontakt'</span>, for mere information.
            </h2>
            <br/><br/>

            <ProjectReader state={readerState} htmlLink={readerHtml} ></ProjectReader>

        </div>
    );
}
