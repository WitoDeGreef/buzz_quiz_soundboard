import Sound from "./sound";
import sounds from "./sounds";

const config = require('../next.config');

export default function Soundboard() {
    const basePath = config.basePath + "/audio/";

    const toLabel = (filename) => {
        // Remove extension
        let name = filename.split('.')[0];
        
        // Remove dashes
        name = name.replaceAll('-', ' ');

        // Now capitalize each word and return
        return name.split(' ').map(part => part.charAt(0).toUpperCase() + part.substring(1)).join(' ');
    }
    
    const toName = (filename) => filename.split('.')[0];

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {sounds.map(filename => {
                        return <Sound key={filename} filepath={basePath + filename} name={toName(filename)} label={toLabel(filename)} />
                    })}
                </div>
            </div>
        </section>
    );
}