import React, { useState } from 'react';
import axios from 'axios';
const baseURL = "http://127.0.0.1:5000/"
function LaptopForm() {
    const [Company, setCompany] = useState(""); //name
    const [Typename, setTypename] = useState("");//name
    const [Ram, setRam] = useState("");//number
    const [Weight, setWeight] = useState("");//number
    const [Touchscreen, setTouchscreen] = useState("");//name
    const [Ips, setIps] = useState("");//name
    const [PPI, setPPI] = useState("");//name
    const [CPU, setCPU] = useState("");//name
    const [Brand, setBrand] = useState("");//name
    const [HDD, setHDD] = useState("");//number
    const [SSD, setSSD] = useState("");//number
    const [GPU, setGPU] = useState("");//name
    const [OS, setOS] = useState("");//name
    const [Age, setAge] = useState("");
    const [price, setPrice] = useState(null)





    function getFormData(e) {

        e.preventDefault()
    }

    function handleSubmit(e) {
        //"brand","screen_size","ram","rom","mp"
        // print("")
        // console.log("isnew:"+Isnew)
        // console.log("area:"+Area)
        axios.post(baseURL+'lappredict', {
            company: Company,
            type: Typename,
            ram: Ram,
            weight: Weight,
            touch: Touchscreen,
            ips: Ips,
            ppi: PPI,
            cpu: CPU,
            brand: Brand,
            hdd: HDD,
            ssd: SSD,
            os: OS
        }).then((response) => {
            console.log(response.data)
            setPrice(response.data)
        })
        e.preventDefault()
    }

    return (
        <div className="App" id="lap">
            <h1>Laptop Prediction Form</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={getFormData} className='laptoplabel'>
                <label for="we">Enter the Company name:</label>
                <input type="text" id="we" placeholder="Enter Company" value={Company} onChange={(e) => setCompany(e.target.value)} /> <br /><br />


                <label for="mn">Enter Type of laptop:</label>
                <input type="text" id="mn" placeholder="Enter Type" value={Typename} onChange={(e) => setTypename(e.target.value)} /> <br /><br />
                <label for="wep">Enter RAM in Laptop:</label>
                <input type="number" id="wep" placeholder="Enter RAM" value={Ram} onChange={(e) => setRam(e.target.value)} /> <br /><br />
                <label for="op">Enter Weight of Laptop:</label>
                <input type="number" id="op" placeholder="Enter Weight" value={Weight} onChange={(e) => setWeight(e.target.value)} /> <br /><br />
                <label for="lm"> Type of touchscreen:</label>
                <input type="text" id="lm" placeholder="Enter Touchscreen" value={Touchscreen} onChange={(e) => setTouchscreen(e.target.value)} /> <br /><br />
                <label for="ru"> Enter IPS:</label>
                <input type="text" id="ru" placeholder="Enter IPS" value={Ips} onChange={(e) => setIps(e.target.value)} /> <br /><br />
                <label for="ppi"> Enter PPI:</label>
                <input type="text" id="ppi" placeholder="Enter PPI" value={PPI} onChange={(e) => setPPI(e.target.value)} /> <br /><br />
                <label for="CPU"> Enter CPU type:</label>
                <input type="text" id="CPU" placeholder="Enter CPU type" value={CPU} onChange={(e) => setCPU(e.target.value)} /> <br /><br />
                <label for="brand"> Enter Brand of Laptop:</label>
                <input type="text" id="brand" placeholder="Enter Brand" value={Brand} onChange={(e) => setBrand(e.target.value)} /> <br /><br />
                <label for="hdd">Enter HDD in Laptop:</label>
                <input type="number" id="hdd" placeholder="Enter HDD " value={HDD} onChange={(e) => setHDD(e.target.value)} /> <br /><br />
                <label for="ssd">Enter SSD in Laptop:</label>
                <input type="number" id="ssd" placeholder="Enter SSD" value={SSD} onChange={(e) => setSSD(e.target.value)} /> <br /><br />
                <label for="gpu"> Enter GPU in Laptop:</label>
                <input type="text" id="gpu" placeholder="Enter GPU" value={GPU} onChange={(e) => setGPU(e.target.value)} /> <br /><br />
                <label for="os"> Enter Operating system in Laptop:</label>
                <input type="text" id="os" placeholder="Enter OS" value={OS} onChange={(e) => setOS(e.target.value)} /> <br /><br />














                <button type="submit">Predict Price</button>
            </form>
        </div>
    );
}



export default LaptopForm;
//<label for="wep">number of previous owners:</label>
       //         <input type="number" id="wep" placeholder="Enter here" value={Owner} onChange={(e) => setOwner(e.target.value)} /> <br /><br />


