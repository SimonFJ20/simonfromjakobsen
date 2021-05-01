import { useRef } from 'react';
import './ProjectReader.css'

const loadHtml = async (htmlLink) => {

    try {
        const html = await (await fetch(htmlLink)).text();
        if(html) return html;
        else throw new Error('html loading error');
    } catch {
        return '404 Project page not found'
    }

}


export default function ProjectReader(props) {
    const readerHtml = useRef();

    if(props.state && props.htmlLink) {
        loadHtml(props.htmlLink).then(r => readerHtml.current.innerHTML = r);

        return <div id='ProjectReader'>
                <div id='readerHtml' ref={readerHtml} >
                    <p>Loading HTML</p>
                </div>
            </div>;
    }
    else return false;

}
