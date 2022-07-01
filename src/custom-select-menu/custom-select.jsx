import React,{useState} from "react";
import "./index.css";
import {stateOptions} from "./data"


const CustomSelect = props => {
const [expanded,setExpanded]=useState(false)
const [selVal,setSelVal]=useState([])
  
const showCheckboxes=() =>{
  if (!expanded) {
    setExpanded(true);
  } else {
    setExpanded(false);
  }
}

const evaluateCheckBox=(val)=>{
console.log(selVal.includes(val));
  //return true;
  return selVal.includes(val)
}

  return (
  <div>
    <div style={{marginBottom:'14px'}}>
    Selected Value:<b>{selVal.join(',')}</b>
    </div>
    <div className="multiselect">
    <div className="selectBox " onClick={()=>showCheckboxes()}>
      <select>
        <option>Select an option</option>
      </select>
      <div className="overSelect"></div>
    </div>
    <div id="checkboxes"  style={{display:`${expanded?'block':'none'}`}}>
    {expanded && stateOptions.map(data=>(
        <div key={data.value}>
           <input  type="checkbox"
           checked={evaluateCheckBox(data.label)}
                            onClick={(e) => {
                                e.target.checked?selVal.push(data.label):selVal.pop(data.label);
                                setSelVal([...selVal])
                                }
                            }
                        />
      {data.label}</div>)
    )}
  </div>
  </div>
  </div>
  );
};
export default CustomSelect;
