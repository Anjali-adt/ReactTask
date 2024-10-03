import React from "react";

function TodoList(props){
    return(
        <>
        
        <li className="list-item" style={{color:"white" , marginLeft:"50px"}} >
          {props.item}
            <span className="icons">
                 <i class="fa-solid fa-trash icon-delete" style={{marginLeft:"10px", color:"red"}}
                 onClick={e=>{
                    props.deleteItem(props.index)
                 }}></i>
            </span>
        </li>

        </>
    )
}
export default TodoList;