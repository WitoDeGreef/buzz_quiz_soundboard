import Link from "next/link";
import { useEffect } from "react";

const config = require('../next.config');

export default function Sound({ filepath, label, name }) {
    let audio;

    useEffect(() => {
        audio = new Audio(filepath);
    }, [filepath]);

    const playSound = () => {
        if (!!audio)
            audio.play();
    }

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="fw-bolder">{label}</h5>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={playSound}>
                        <i className="bi-volume-up-fill me-1"></i>
                        
                        </a></div>
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" href={config.basePath + "/" +  name} >Open</Link></div>
                </div>
            </div>
        </div>
    );
}