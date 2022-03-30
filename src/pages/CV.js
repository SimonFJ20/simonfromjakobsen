import './CV.css';

export default function CV(props) {
    return (
        <div className="CV">
            <div className="CVTitle">
            </div>
                <h1>
                    CV
                </h1>

                <h2><b>Hvem er jeg</b></h2>
        

            <h2>
                Jeg er 17 år gammel. Jeg har bestået folkeskole eksamen og GF1 på EUX. Jeg er i gang med GF2 på EUX<br/>
                som Datatekniker m. s. i. programmering. Jeg har stor interresse indenfor IT og programmering. Jeg<br/>
                har programmeret 6 år. 
            </h2>

            <br/>
            <br/>

            <div id="cv-buttons">
                <a href="/static/simonfromjakobsen_cv_teknisk.pdf" target="_blank">
                    Mit CV (Teknisk)
                </a>
                <a href="/static/simonfromjakobsen_cv.pdf" target="_blank">
                    Mit CV
                </a>
            </div>

        </div>
    );
}
