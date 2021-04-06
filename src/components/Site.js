import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import './Site.css';

function GetSite(props) {
    switch (props.page) {
        case '/home':
            return <Home page={props.page} setPage={props.setPage}></Home>;
        case '/projects':
            window.history.pushState({}, 'Simon From Jakobsen', '/projects')
            return <Projects page={props.page} setPage={props.setPage}></Projects>;
        case '/cv':
            window.history.pushState({}, 'Simon From Jakobsen', '/cv')
            return <div>cfgdfgdfgdfd</div>;
        case '/contact':
            window.history.pushState({}, 'Simon From Jakobsen', '/contact')
            return <Contact page={props.page} setPage={props.setPage}></Contact>;
        default:
            console.log(props.page)
            return (
                <div>
                    <h1>404 ikke fundet</h1>
                </div>
            );
    }
    
}

export default function Site(props) {
    return (
        <div className="Site" >
            <GetSite page={props.page} setPage={props.setPage}></GetSite>
        </div>
    );
}
