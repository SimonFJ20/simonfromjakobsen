import Home from '../pages/Home';
import './Site.css';

function GetSite(props) {
    switch (props.page) {
        case '/home':
            return <Home></Home>;
        case '/projects':
            window.history.pushState({}, 'Simon From Jakobsen', '/projects')
            return <div>pdfsdfsdf</div>;
        case '/cv':
            window.history.pushState({}, 'Simon From Jakobsen', '/cv')
            return <div>cfgdfgdfgdfd</div>;
        case '/contact':
            window.history.pushState({}, 'Simon From Jakobsen', '/contact')
            return <div>kgdfgdfgdfgd</div>;
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
        <div className="Site">
            <GetSite page={props.page}></GetSite>
        </div>
    );
}
