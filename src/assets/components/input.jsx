import React from "react";
import inputcss from "./input.module.css";
import taskcss from "./task.module.css";
import { useState } from "react";

function Input() {
  var [data, setdata] = useState();

  let [completed, setCompleted] = useState([]);

  var [alltask, setalltask] = useState([]);

  function addevent(event) {
    setdata(event.target.value);
    console.log(data);
  }

  function add() {
    if(data){
    setalltask([...alltask, data]);
    console.log(alltask);
    }
    // setdata("");
  }

  function done(val, ind) {
    setCompleted([...completed, val]);
    deleteByIndex(ind);
    console.log("done", completed);
  }

  const deleteByIndex = (ind) => {
    setalltask((oldValues) => {
      return oldValues.filter((_, i) => i !== ind);
    });
  };

  return (
    <div className={inputcss.main1}>
      <form action="">
        <input
          onChange={addevent}
          className={inputcss.inputarea}
          type="text"
          name="text"
          id="text"
          required
         
        />
        <label className={inputcss.inputlabe} htmlFor="text">
          Add Item
        </label>
        <button onClick={add} className={inputcss.btn} type="button">
          <h1>
            <b>+</b>
          </h1>
        </button>
      </form>
      <h6 style={{textAlign:"center",color:"whitesmoke",position:"absolute",paddingTop:"60px", marginLeft:"135px"}}>Pending</h6>
      <hr style={{ height: "3px", color: "white", marginTop: "80px" }} />

      {alltask.map((val, ind) => {
        console.log(val);
        return (
          <>
            <div
              style={{ paddingRight: "20px", marginTop: "10px" }}
              className={taskcss.output}
            >
              <button
                onClick={() => done(val, ind)}
                className={taskcss.btn}
                style={{ marginLeft: "0px", paddingRight: "15px" }}
              >
                ✔
              </button>
              <p className={taskcss.task}>{val}</p>
              <button
                onClick={() => deleteByIndex(ind)}
                className={taskcss.btn}
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </>
        );
      })}


    <hr style={{ height: "3px", color: "white", marginTop: "0px" }} />
    <h6 style={{textAlign:"center",color:"whitesmoke"}}>Complted</h6>


    {completed.map((val, ind) => {
        console.log(val);
        return (
          <>
            <div
              style={{ paddingRight: "20px", marginTop: "10px" }}
              className={taskcss.output}
            >
            
              <p className={taskcss.task}>✔{val} </p>
             
            </div>
          </>
        );
      })}

    </div>

  );
}

export default Input;
