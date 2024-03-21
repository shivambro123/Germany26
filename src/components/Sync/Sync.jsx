import React from "react";
import "../../styles/Sync.css";
import mobileImage from "../../assests/cloudimage.svg";

const Sync = () => {
  return (
    <section>
      <div className="py-4">
        <h3 className="mb-3 headTitlesync">
          SYNC ALL DOCUMENTS IN THE CLOUD
        </h3>
        <p className="text-center text__20 mb-3">
          Simple, flexible, and powerful. Track all your applications
          with the convince of your phone
        </p>
      </div>
      <div>
        <img src={mobileImage} alt="mobile" />
      </div>
    </section>
  );
};

export default Sync;
