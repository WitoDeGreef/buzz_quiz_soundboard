import Sound from "./sound";

export default function Soundboard() {
    const basePath = "/audio/";
    const sounds = [
        "air-biscuit.mp3",
        "america.mp3",
        "arnold.mp3",
        "boing.mp3",
        "boss.mp3",
        "buzzer.mp3",
        "bye-felicia.mp3",
        "ill-be-back.mp3",
        "moaning.mp3",
        "punch.mp3",
        "splat.mp3",
        "squeaky-toy.mp3",
        "toy.mp3",
        "yodel.mp3",
        "you-suck.mp3",
    ];

    const toName = (filename) => {
        // Remove extension
        let name = filename.split('.')[0];
        
        // Remove dashes
        name = name.replaceAll('-', ' ');

        // Now capitalize each word and return
        return name.split(' ').map(part => part.charAt(0).toUpperCase() + part.substring(1)).join(' ');
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {sounds.map(filename => {
                        return <Sound key={filename} filepath={basePath + filename} name={toName(filename)} />
                    })}
                </div>
            </div>
        </section>
    );
}