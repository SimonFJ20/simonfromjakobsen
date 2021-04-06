import './Contact.css';

export default function Contact(props) {
    return (
        <div className="Contact">
            <div className="ContactTitle">
            </div>
                <h1>
                    Kontakt
                </h1>
            <hr />

            <h2>
                Email: simon
            </h2>
            
            <hr />
            <h1>
                Jeg søger Praktikplads
            </h1>
            <h2>
                Jeg søger lige nu (siden 23-03-2021) praktikplads, som Datatekniker med speciale i programmering<br/>
                Det gør jeg, fordi jeg lige nu er under uddannelse i EUX på Mercantec Gymnasium i Viborg, som Datatekniker.<br/>
                Hvis du som firma søger en Datateknikerlærling med speciale i programmering,<br/> så er du meget velkommen
                til at kontakte mig. <br/>
                Se siden <span className="ContactInlineLink" onClick={() => {props.setPage('/contact')}}>'Kontakt'</span>, for mere information.
            </h2>
            <br/><br/>
        </div>
    );
}
