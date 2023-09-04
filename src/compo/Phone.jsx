import React, { useState } from 'react';
import './carwrap.css'
function MobileForm() {
    const [Brand1, setBrand1] = useState("");
    const [Screensize, setScreensize] = useState("");
    const [RAM1, setRAM1] = useState("");
    const [ROM, setROM] = useState("");
    const [Mp, setMp] = useState(false);



    function getFormData(e) {

        e.preventDefault()
    }
    return (
        <div className="App" id='Phonepred'>
            <h1>Mobile Price Prediction Form</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={getFormData} className='Phonelabel'>
                <label for="tyy" className='got'>Enter the Brand of Mobile:</label>
                <input type="text" id="tyy" placeholder="Enter Brand" value={Brand1} onChange={(e) => setBrand1(e.target.value)} /> <br /><br />
                <label for="hj" className='got'>Enter Screensize:</label>
                <input type="number" id="hj" placeholder="Enter Screensize" value={Screensize} onChange={(e) => setScreensize(e.target.value)} /> <br /><br />
                <label for="fjjd" className='got'>Enter RAM in Mobile:</label>
                <input type="number" id="fjjd" placeholder="Enter RAM " value={RAM1} onChange={(e) => setRAM1(e.target.value)} /> <br /><br />

                <label for="lkkk">Enter ROM Mobile:</label>
                <input type="number" id="lkkk" placeholder="Enter ROM" value={ROM} onChange={(e) => setROM(e.target.value)} /> <br /><br />

                <label for="okl">Megapixels:</label>
                <input type="number" id="okl" placeholder="Enter MPs" value={Mp} onChange={(e) => setMp(e.target.value)} /> <br /><br />





                <button type="submit">Predict Price</button>
            </form>
        </div>
    );
}



export default MobileForm;