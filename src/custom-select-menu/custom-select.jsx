import React, { useState,useMemo } from "react";
import "./index.css";
import PropTypes from 'prop-types'


const CustomSelect = ({option,id='value',label='label'}) => {
  const [expanded, setExpanded] = useState(false)
  const [selVal, setSelVal] = useState([])

  const showCheckboxes = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }

  
  const evaluateCheckBox = (val) => {
    return selVal.includes(val)
  }


 const dropdownWithCheckBox = useMemo(()=>{
    return (option.map(data => (
      <div key={data.value} >
        <input type="checkbox"
          checked={evaluateCheckBox(data.label)}
          onChange={(e) => {
            e.target.checked ? selVal.push(data.label) : selVal.pop(data.label);
            setSelVal([...selVal])
          }
          }
        />
        <span>{data.label}</span></div>)
    ))
  },[selVal])

  return (
    <div>
      <div style={{ marginBottom: '14px' }}>
        Selected Value:<b>{selVal.join(',')}</b>
      </div>
      <div className="multiselect">
        <div className="selectBox " onClick={() => showCheckboxes()}>
          <select>
            <option>Select an option</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <div id="checkboxes" style={{ display: `${expanded ? 'block' : 'none'}`, maxHeight: '50vh', 'overflow':'scroll' }}>
        <input type="checkbox"
                checked={selVal.length===Object.keys(option).length}
                onChange={(e) => {
                 e.target.checked ? setSelVal([...option.map(data=>data.label)]): setSelVal([])
                }
                }
              /><span>Select All</span>
              {dropdownWithCheckBox}
        </div>
      </div>
    </div>
  );
};
CustomSelect.propTypes ={
  option:PropTypes.array.isRequired,
  label:PropTypes.string,
  id:PropTypes.string
}
export default CustomSelect;
