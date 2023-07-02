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
        <div className='container-fluid bg-info bg-info p-0 mt-5'>
            <div className='row'>
                <h1 className='col-9 display-2 p-4'>Attack</h1>
                <a className='col-3 btn btn-primary p-5' onClick={starts} type='button'>Click Me</a>
                {trigger && <Timer />}
            </div></div>
    )
}
export default Attack;