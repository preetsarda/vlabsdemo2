import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [remainingTime, setRemainingTime] = useState(120);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    if (isModalOpen && remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000); // Decrease the time every second

      return () => clearInterval(timer);
    } else if (remainingTime === 0) {
      setTimerFinished(true);
    }
  }, [isModalOpen, remainingTime]);

  // const openModal = () => {
  //   setIsModalOpen(true);
  //   setRemainingTime(180); // Reset the remaining time when opening the modal
  // };

  const closeModal = () => {
    if (timerFinished) {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {/* Modal component */}
      <div className={`modal fade show`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Please Wait</h5>
              <button type="button" className="close" onClick={timerFinished ? closeModal : null}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Starting an instance<br />Approx wait time : {Math.floor(remainingTime / 60)} minutes {remainingTime % 60} seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when the modal is open */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Timer;
