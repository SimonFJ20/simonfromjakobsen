import './Projects.css';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects(props) {
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
            <ProjectCard color={'#242424'} imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} ></ProjectCard>
            <ProjectCard color={'#242424'} imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} ></ProjectCard>
            <ProjectCard color={'#242424'} imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} ></ProjectCard>
            <ProjectCard color={'#242424'} imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} ></ProjectCard>
            <ProjectCard color={'#242424'} imageUrl={'https://s27389.pcdn.co/wp-content/uploads/2016/10/AdobeStock_114525500.jpeg'} ></ProjectCard>
            </div>
            <hr />
            <h1>
                Jeg søger Praktikplads
            </h1>
            <h2>
                Jeg søger lige nu (siden 23-03-2021) praktikplads, som Datatekniker med speciale i programmering<br/>
                Det gør jeg, fordi jeg lige nu er i gang med en EUX på Mercantec Gymnasium i Viborg, som Datatekniker.<br/>
                Hvis du som firma søger en Datateknikerlærling med speciale i infrastruktur,<br/> så er du meget velkommen
                til at kontakte mig. <br/>
                Se <button className="ProjectsInlineLink" onClick={() => {props.setPage('/contact')}}>Kontakt</button> siden, for mere information.
            </h2>
            <br/><br/>
        </div>
    );
}
