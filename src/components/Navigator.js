import './Navigator.css';

function NavigatorLink(props) {
    const isActive = () => {
        if (props.page === props.thisPage) return 'NavigatorLink active';
        else return 'NavigatorLink';
    };

    return (
        <div
            className={isActive()}
            onClick={() => props.setPage(props.thisPage)}
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
                thisPage={0}
            >
                Forside
            </NavigatorLink>
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={1}
            >
                Projekter
            </NavigatorLink>
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={2}
            >
                CV
            </NavigatorLink>
            <NavigatorLink
                page={props.page}
                setPage={props.setPage}
                thisPage={3}
            >
                Kontakt
            </NavigatorLink>
        </div>
    );
}
