import React from "react";

import loadingImage from "../../img/spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={loadingImage}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
