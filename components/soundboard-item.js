import Link from "next/link";
import { useEffect, useState } from "react";

const config = require('../next.config');

export default function SoundBoardItem({ filepath, label, name }) {
    const [playing, setPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        let aud = new Audio(filepath);
        aud.onended = (event) => {
            setPlaying(false);
        };
        setAudio(aud);
    }, [filepath]);

    const onSoundClick = () => {
        // When no audio is available, return
        if (!audio)
            return;

        // When audio is still playing, stop after pressing it another time
        if (playing) {
            audio.pause();
            setPlaying(false);
            return;
        }

        // Start playing the sound
        audio.currentTime = 0;
        audio.play()
        setPlaying(true);
    }

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> */}
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="fw-bolder">{label}</h5>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" onClick={onSoundClick}>
                            {playing ?
                                (
                                    <i className="bi-pause-btn-fill me-1"></i>
                                )
                                : (
                                    <i className="bi-volume-up-fill me-1"></i>
                                )}
                        </a>
                    </div>
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" href={name} >Open</Link></div>
                </div>
            </div>
        </div>
    );
}