import { useEffect, useRef } from 'react';
import './ProjectReader.css';

const setContent = async (url, element) => {
    const res = await fetch(url);
    const html = await res.text();
    return html;
}

export default function ProjectReader(props) {
    const readerContent = useRef();

    useEffect(() => {
        if(props.show) {
            setContent(props.html).then(data => readerContent.current.innerHTML = data)
        }
    });

    if(props.show) { 
        

        return <div id="ProjectReader">
            <div id="closeButton" onClick={props.closeReader} >X</div>

            <div id="readerContent" ref={readerContent} ></div>
        </div>
    }
    else return <div></div>
}
