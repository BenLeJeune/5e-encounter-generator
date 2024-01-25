import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {Modal} from 'bootstrap';
import UserGuide from '../assets/UserGuideVertical.png'

export default function AboutModal() {


    useEffect(() => {
        const item = localStorage.getItem('viewed_before')
        if (item === null) {
            localStorage.setItem("viewed_before", "true")
            console.log("showing modal")
            showModal()
        }
    }, [])

    const showModal = () => {
        const modalEl = document.getElementById("aboutModal")
        if (modalEl !== null) {
            const modal = new Modal(modalEl, {})
            modal.show()
        }
    }

    return <div className="modal fade modal-lg" id="aboutModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">About EnGen</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex w-100 justify-content-center align-content-center">
                            <img src={UserGuide} alt="User journey" id="UserJourney"/>
                        </div>
                        <h6>How do I use EnGen?</h6>
                        <p>Pick your players' levels, select a difficulty, and click generate! You can add monsters
                        from the bestiary that you want to be in the encounter.</p>
                        <p>EnGen will then generate some encounter suggestions, including location, tactics, and alternate objectives.</p>
                        <h6>Where did the data come from?</h6>
                        The data was originally gathered for <a href="https://github.com/zhudotexe/FIREBALL?tab=readme-ov-file"
                           target="_blank" rel="noopener noreferrer">training an LLM
                        </a>, so it
                        wasn't gathered for encounter-building purposes. As a result, some connections may be strange,
                        and some might be lacking - but all are sourced from real encounters.
                        This is a work in progress, so feedback is welcome!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
    </div>
}