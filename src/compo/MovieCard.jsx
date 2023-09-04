import React, { useState } from 'react';

function CarPricePredictionForm() {
    const [carAttributes, setCarAttributes] = useState({
        age: '',
        kilometersDriven: '',
        numberOfPreviousOwners: '',
        Fuel_type: '',
        seller_type: '',
        transmission: '',
        Owner: '',

        // Add more car attributes here as needed
    });
    const [predictedPrice, setPredictedPrice] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCarAttributes({ ...carAttributes, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make a prediction of the car price using a machine learning model
        // and set the predicted price in the state
        // const predictedPrice = makePrediction(carAttributes);
        setPredictedPrice(predictedPrice);
    };

    return (

        <div>
            <h1>Car Price Prediction Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Age:</label>
                <input type="number" name="age" value={carAttributes.age} onChange={handleInputChange} />

                <br />

                <label>
                    Kilometers Driven: </label>
                <input type="number" name="kilometersDriven" value={carAttributes.kilometersDriven} onChange={handleInputChange} />


                <br />

                <label>
                    Number of Previous Owners:</label>
                <input type="number" name="numberOfPreviousOwners" value={carAttributes.numberOfPreviousOwners} onChange={handleInputChange} />

                <br />

                <label for="fueltype">
                    Fuel-type</label>
                <select name="petrol1" id="fueltype" value={carAttributes.Fuel_type} onChange={(event) => setPredictedPrice(event.target.Fuel_type)}>
                    <option value="petrol">petrol</option>
                    <option value="diesel">diesel</option>
                    <option value="CNG">CNG</option>
                </select>
                <br />

                <label for="sellertype">
                    seller-type</label>
                <select name="sellertype" id="sellertype" value={carAttributes.seller_type} onChange={handleInputChange}>
                    <option value="sellertype2">Dealer</option>
                    <option value="sellertype3">Individual</option>

                </select>
                <br />

                <label for="transmission">
                    Transmission</label>
                <select name="transmission1" id="transmission" value={carAttributes.transmission} onChange={handleInputChange}>
                    <option value="transmission2">Manual</option>
                    <option value="transmission3">Automatic</option>

                </select>


                <br />
                <label>
                    Owner:
                    <input type="text" name="name" value={carAttributes.owner} onChange={handleInputChange} />
                </label>
                <br />
                {/* Add more input fields for other car attributes here as needed */}
                <button type="submit">Predict Price</button>
            </form>
            <br />
            {predictedPrice && <p>Predicted Price: {predictedPrice}</p>}
        </div>

    );
}

export default CarPricePredictionForm;