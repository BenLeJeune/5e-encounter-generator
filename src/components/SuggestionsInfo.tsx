import React from 'react';


export default function SuggestionsInfo() {


    return <div className="modal fade" id="encounterDetailModal" tabIndex={-1}
                aria-labelledby="encounterDetailModalLabel"
                aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">Using AI</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    The options in the 'Suggestions' column are a mixture of fully hand-written, and pre-generated with
                    AI then edited.

                    If they were all hand-written, it would get repetitive very quickly,
                    or take me a lot more time :P
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
}
