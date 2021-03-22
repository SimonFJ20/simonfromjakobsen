import './Navigator.css';

function NavigatorLink(props) {
    const isActive = () => {
        if (props.page === props.thisPage) return 'NavigatorLink active';
        else return 'NavigatorLink';
    };

    return (
        <div
            className={isActive()}
            onClick={() => {
                props.setPage('/' + props.thisPage);
                window.history.pushState({}, 'Simon From Jakobsen', props.thisPage);
            }}
        >
            <h2>{props.children}</h2>
        </div>
    );
}

export default function Navigator(props) {
    return (
        <div className="Navigator">
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={'home'}
            >
                Forside
            </NavigatorLink>
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={'projects'}
            >
                Projekter
            </NavigatorLink>
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={'cv'}
            >
                CV
            </NavigatorLink>
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={'contact'}
            >
                Kontakt
            </NavigatorLink>
        </div>
    );
}
