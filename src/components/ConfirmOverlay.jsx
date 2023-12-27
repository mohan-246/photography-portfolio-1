import React from "react";

const ConfirmOverlay = ({ setShowOverlay , host }) => {
  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <p>
          This action is irreversible. Are you sure you want to proceed with
          hosting it?
        </p>
        <div className="buttons">
          <button onClick={() => setShowOverlay(false)}>No</button>
          <button
            onClick={() => {
                host()
              setShowOverlay(false);
             
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOverlay;
