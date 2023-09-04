import React, { useState } from 'react';
import './carwrap.css'
import axios from 'axios';
const baseURL = "http://localhost:5000/"

function FlavorForm() {
    const [Name, setName] = useState("");
    const [Company, setCompany] = useState("");
    const [Year, setYear] = useState(0);
    const [Kmsdriven, setKmsdriven] = useState(0);
    const [Fuel_type, setFuel_type] = useState("");
    const [price, setPrice] = useState(null)


    function getFormData(e) {
        console.log({
            name: Name,
            company: Company,
            year: Year,
            kms: Kmsdriven,
            fuel: Fuel_type
        })
        axios.post(baseURL+"carpredict", {
            name: Name,
            company: Company,
            year: Year,
            kms: Kmsdriven,
            fuel: Fuel_type
        }).then((response) => {
            console.log(response.data)
            setPrice(response.data)
        })
        e.preventDefault()
    }

    function handleSubmit(e) {
        //"name","company","year","kms_driven","fuel_type"
        axios.post(baseURL+'carpredict', {

        })
        e.preventDefault()
    }
    
    return (
        <div className="App" id="cars">
            <h1>Car Price Prediction Form</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={getFormData} className='carlabel'>
                <label for="we">Enter the Name of Car:</label>
                <input type="text" id="we" placeholder="Enter Name" value={Name} onChange={(e) => setName(e.target.value)} /> <br /><br />
                <label for="wep">Enter the Name of Company:</label>
                <input type="text" id="wep" placeholder="Enter Company" value={Company} onChange={(e) => setCompany(e.target.value)} /> <br /><br />
                <label for="ru">Enter Years :</label>
                <input type="number" id="ru" placeholder="Enter Years" value={Year} onChange={(e) => setYear(e.target.value)} /> <br /><br />
                <label for="lk">Enter the Kms Driven:</label>
                <input type="number" id="lk" placeholder="Enter KMs" value={Kmsdriven} onChange={(e) => setKmsdriven(e.target.value)} /> <br /><br />




                <label for="fueltype">
                    Enter Fuel-type</label>
                <select name="Fuel-type" id="fueltype" value={Fuel_type} onChange={(e) => setFuel_type(e.target.value)}>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                </select>
                <br />



                <br />
                <button type="submit" onClick={handleSubmit}>Predict Price</button>
            </form>
            Price: {price}
        </div>
    );
}


export default FlavorForm;