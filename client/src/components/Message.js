import React from "react";

const renderMessageClassName = (props) => {
    let className = "ui message ";
    if(props.message.msgError) {
        className= className + "orange"
    } else {
        className= className + "blue"
    }
    return className; 
}
const Message = (props) => {
   
  return (
    <>
     <div className={renderMessageClassName(props)}>{props.message.msgBody}</div>
     {/* <div className="ui orange message">Orange</div> */}
    </>
  );
};

export default Message;
