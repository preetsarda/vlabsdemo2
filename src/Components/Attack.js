import React, { useState } from 'react';
import Timer from './timer';

function Attack() {
  const [trigger, setTrigger] = useState(false);
  const [attacked, setAttacked] = useState(false);

  async function starts() {
    console.log("A")
    setTrigger(true);
    setTimeout(() => {
      setTrigger(false);
    }, 18000);

    try {
      const response = await fetch("http://13.127.3.114:8080/connect", {
        crossDomain: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const data = await response.json();
      console.log(data);
      const newTab = window.open(data.destination_url, '_blank');
      setTrigger(false);
      setAttacked(true);
      // newTab.focus();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container border rounded p-4 mt-5">
      <h1 className="display-6 text-center">Attack</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <button className="btn btn-primary" onClick={starts} disabled={attacked}>
            Click Me
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
