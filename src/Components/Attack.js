import React, { useState } from 'react';
import Timer from './timer';

const Attack = ({ onCompleted }) => {
  const [trigger, setTrigger] = useState(false);
  const [attacked, setAttacked] = useState(false);

  const starts = async () => {
    console.log("A")
    setTrigger(true);
    // setTimeout(() => {
    //   setTrigger(false);
    // }, 18000);

    try {
      const response = await fetch("http://13.126.239.109:8085/attack/connect", {
        crossDomain: true,
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      console.log(data);
      window.open(data.destination_url, '_blank');
      setAttacked(true);
      onCompleted();
      // newTab.focus();
    } catch (error) {
      console.log(error);
      alert("Failed to start instance\nPlease try again");
    } finally {
      setTrigger(false);
    }
  }

  return (
    <div className="container border rounded p-4 mt-5">
      <h1 className="display-6 text-center">Attack</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <button className="btn btn-primary" onClick={starts} disabled={attacked}>
            Start
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        {trigger && <Timer />}
      </div>
    </div>
  );
}

export default Attack;
