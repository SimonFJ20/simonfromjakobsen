import Home from '../pages/Home';
import './Site.css';

function GetSite(props) {
    switch (props.page) {
        case 0:
            return <Home></Home>;
        case 1:
            return <div>pdfsdfsdf</div>;
        case 2:
            return <div>cfgdfgdfgdfd</div>;
        case 3:
            return <div>kgdfgdfgdfgd</div>;
        default:
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
