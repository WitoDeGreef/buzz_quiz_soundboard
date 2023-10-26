import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const config = require('../next.config');

export default function Sound() {
    const router = useRouter();
    const basePath = config.basePath + "/audio/";
    const soundName = router.query.soundName;

    let audio;

    useEffect(() => {
        const filepath = basePath + soundName + ".mp3";
        audio = new Audio(filepath);
    }, [soundName]);

    const playSound = () => {
        if (!!audio)
            audio.play();
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <a className="btn" >
                            <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." onClick={playSound} />
                        </a>
                        <div className="small mb-1"><Link className="btn btn-outline-dark mt-auto" href={config.basePath + "/"} >Terug</Link></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
