import './CV.css';

export default function CV(props) {
    return (
        <div className="CV">
            <div className="CVTitle">
            </div>
                <h1>
                    CV
                </h1>
        
            <hr />

            <h2>Lidt om mig</h2>

            <h3>
                Jeg er 17 år gammel. Jeg har bestået folkeskole eksamen og GF1 på EUX. Jeg er i gang med GF2 på EUX<br/>
                som Datatekniker m. s. i. programmering. Jeg har stor interresse indenfor IT og programmering. Jeg<br/>
                har programmeret 6 år. 
            </h3>

            <hr />

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
        </div>
    );
}
