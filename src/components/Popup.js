/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupModal = ({onchangetask}) => {
    const [description, setDesc] = useState("")
    const [date, setDate] = useState("")
    const [isOpen, setModal] = useState("")

    function handlForm(e) {
        setModal(false);
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        onchangetask([{id:3, text:e.target[0].value, day:e.target[1].value }])
    }
    return ( 
  <Popup className='btn' trigger={<button> Add</button>} position="right center"  open={isOpen}>
    <div className="popup">
        <div className="popup-inner">
            <form onSubmit={handlForm}>
                    <label>
                        Description:
                        <input type="textbox" name="desc" value={description} size={20}  onChange={e => setDesc(e.target.value)}  />
                    </label>
                    <label>
                        Date Time:
                        <input type="date" name="dateValue" value={date} onChange={e => setDate(e.target.value)} />
                    </label>
                    <button type="submit">Add</button>
                </form></div></div>
  </Popup>
);
    }

export default PopupModal;