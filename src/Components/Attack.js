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
        <div className='container border rounded p-0 mt-5'>
            <div className='row align-items-center mr-4'>
                <h1 className='col-9 display-6 p-2 ms-3'>Attack</h1>
                    <a className='col-1 btn btn-primary p-2 btn-sm' onClick={clickHandler} type='button'>Click Me</a>
                {trigger && <Timer />}
            </div>
        </div>
    )
}
export default Attack;