import React, { useState } from "react";

function TodoInput(props) {

    const [inputText, setInputText] = useState(' ');

    // to save input on pressing enter key
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }

    return (
        <>
            <div className="input-container" style={{marginLeft:"50px",marginTop:"25PX"}}>
                <input
                 type="text" style={{height:"40px", textAlign:"center"}}className="input-box-todo" 
                 placeholder="Enter your todo" value={inputText} 
                 onChange={e => {
                    setInputText(e.target.value)
                  }}
                  onKeyDown={handleEnterPress}
                   />
                  
                <button className="add-btn" onClick={()=>{
                    props.addList(inputText)
                    setInputText("")
                }}>+</button>
             
            </div>
            <br></br>
        </>
    )
}
export default TodoInput;