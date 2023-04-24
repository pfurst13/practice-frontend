import { useState } from "react";
import Cim from "./Cim";
import Input from "./Input";
import Szoveg from "./Szoveg";

const CreatePage = () => {
  const [data, setData] = useState({});

  return (
    <>
      <h3>Oldal létrehozása</h3>
      <div id="create-container">
      <div id="input-box">
        <Cim onChange={event=> setData({...data, title: event.target.value})}/>
        <Szoveg onChange={event => setData({...data, desc: event.target.value})} />
        </div>
        <div id="option-box">
          <div className="option">
            <Input label="1. lehetőség cím" onChange={(event)=> setData({... data, option_title_1: event.target.value})}/>
            <Input label="1. lehetőség id" onChange={(event)=> setData({...data, option_id_1: event.target.value})}/>
          </div>
          <div className="option">
            <Input label="2. lehetőség cím" onChange={(event)=> setData({... data, option_title_2: event.target.value})}/>
            <Input label="2. lehetőség id" onChange={(event)=> setData({...data, option_id_2: event.target.value})}/>
          </div>
          <div className="option">
            <Input label="3. lehetőség cím" onChange={(event)=> setData({... data, option_title_3: event.target.value})}/>
            <Input label="3. lehetőség id" onChange={(event)=> setData({...data, option_id_3: event.target.value})}/>
          </div>
        </div>
      </div>
      <div id="button">
        <button onClick={sendData}>Save</button>
      </div>
    </>
  );
    function sendData() {
      const url = "https://firsttest-ec4ab-default-rtdb.europe-west1.firebasedatabase.app";
      fetch(`${url}/.json`, {
        method: "PUT",
        body: JSON.stringify(data)
      })
    }
};

export default CreatePage;
