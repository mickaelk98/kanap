import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="loader">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square last"></div>
      <div className="square clear"></div>
      <div className="square"></div>
      <div className="square last"></div>
      <div className="square clear"></div>
      <div className="square "></div>
      <div className="square last"></div>
    </div>
  );
};

export default Loading;
