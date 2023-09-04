import React, { useState } from 'react';
import axios from 'axios';
import './carwrap.css'


const baseURL = "http://127.0.0.1:5000/"

function Houseprice() {
    // const [Area, setArea] = useState("");//number
    // const [Location, setLocation] = useState("");//name
    // const [Bedroom, setBedroom] = useState("");//number
    // const [Isnew, setIsnew] = useState("");//boolean
    // const [Lift, setLift] = useState(false);//boole
    // const [Parking, setParking] = useState("");//boole
    // const [Maintainance, setMaintainance] = useState("");//boole
    // const [Security, setSecurity] = useState("");//boole
    // const [ClubHouse, setClubHouse] = useState("");//boole
    // const [Gasconnec, setGasconnec] = useState("");//boole
    const [Area, setArea] = useState(0);//number
    const [Location, setLocation] = useState("");//name
    const [Bedroom, setBedroom] = useState("");//number
    const [Isnew, setIsnew] = useState("Yes");//boolean
    const [Lift, setLift] = useState("Yes");//boole
    const [Parking, setParking] = useState("Yes");//boole
    const [Maintainance, setMaintainance] = useState("Yes");//boole
    const [Security, setSecurity] = useState("Yes");//boole
    const [ClubHouse, setClubHouse] = useState("Yes");//boole
    const [Gasconnec, setGasconnec] = useState("Yes");//boole
    const [price, setPrice] = useState(null)


    function handleSubmit(e) {
        //"brand","screen_size","ram","rom","mp"
        // print("")
        // console.log("isnew:"+Isnew)
        // console.log("area:"+Area)
        axios.post(baseURL+'housepredict', {
            area: Area,
            location: Location,
            bedroom: Bedroom,
            new: Isnew,
            lift: Lift,
            park: Parking,
            maint: Maintainance,
            sec: Security,
            club: ClubHouse,
            gas: Gasconnec
            
        }).then((response) => {
            console.log(response.data)
            setPrice(response.data)
        })
        e.preventDefault()
    }

    function getFormData(e) {

        e.preventDefault()
    }
    return (
        <div className="App" id="Houses">
            <h1>House Price Prediction Form</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={getFormData} className='Houselabel'>
                <label for="df">Enter the Area in Squarefeet:</label>
                <input type="number" id="df" placeholder="Enter Area in Sqft" value={Area} onChange={(e) => setArea(e.target.value)} /> <br /><br />

                <label for="hj">Enter the Location of House:</label>
                <input type="text" id="hj" placeholder="Enter Location" value={Location} onChange={(e) => setLocation(e.target.value)} /> <br /><br />
                <label for="od">Enter number of Bedroom:</label>
                <input type="number" id="od" placeholder="Enter No. of Bedroom" value={Bedroom} onChange={(e) => setBedroom(e.target.value)} /> <br /><br />


                <label for="fj">
                    Is your House new??</label>
                <select name="Isnew" id="fj" value={Isnew} onChange={(e) => setIsnew(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />
                <label for="ko">
                    Lift service Available?</label>
                <select name="Lift" id="ko" value={Lift} onChange={(e) => setLift(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />
                <label for="tu">
                    Is there any Parking Space?</label>
                <select name="Parking" id="tu" value={Parking} onChange={(e) => setParking(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />
                <label for="vb">
                    Maintainance staff?</label>
                <select name="Maintainance" id="vb" value={Maintainance} onChange={(e) => setMaintainance(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />
                <label for="ddf">
                    Security?</label>
                <select name="Security" id="ddf" value={Security} onChange={(e) => setSecurity(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />
                <label for="uy">
                    Clubhouse available?</label>
                <select name="Clubhouse" id="uy" value={ClubHouse} onChange={(e) => setClubHouse(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />
                <label for="mk">
                    Gas Connection Available?</label>
                <select name="Gasconnection" id="mk" value={Gasconnec} onChange={(e) => setGasconnec(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <br />
                <br />


                <br />
                <button type="submit" onClick={handleSubmit} >Predict Price</button>
            </form>
            price: {price}
        </div>
    );
}


export default Houseprice;