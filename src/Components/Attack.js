import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer';
function Attack() {
    const [trigger, setTrigger] = useState(false);
    const clickHandler = () => {
        setTrigger(true);
        setTimeout(() => {
            setTrigger(false);
        }, 18000)
    }
    return (
        <div className='container-fluid bg-info bg-info p-0 mt-5'>
            <div className='row'>
                <h1 className='col-9 display-2 p-4'>Attack</h1>
                <a className='col-3 btn btn-primary p-5' onClick={clickHandler} type='button'>Click Me</a>
                {trigger && <Timer />}
            </div></div>
    )
}
export default Attack;