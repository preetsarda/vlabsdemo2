import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer';
function Attack() {
    const [trigger, setTrigger] = useState(false);
    async function starts() {
        const Response = await fetch("http://13.127.3.114:8080/connect", {
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
        setTrigger(true);
        const dat = await Response.json();
        setTrigger(false);
        const newTab = window.open(dat.destination_link, '_blank');
        newTab.focus();
    }

    // const clickHandler = () => {
    //     setTrigger(true);
    //     setTimeout(() => {
    //         setTrigger(false);
    //     }, 18000)
    // }
    return (
        <div className="container border rounded p-1 mt-5">
            <div className="row align-items-center">
                <h1 className="col display-6 p-2 ms-3 me-auto col-12 col-sm-auto ps-4">Attack</h1>
                <div className="col-12 col-md-3 d-flex justify-content-end">
                    <a className="btn btn-primary btn-sm" onClick={starts} type="button">
                        Click Me
                    </a>
                </div>
                {trigger && <Timer />}
            </div>
        </div>
    );
}
export default Attack;