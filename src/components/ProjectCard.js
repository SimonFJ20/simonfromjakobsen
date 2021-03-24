import './ProjectCard.css';

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