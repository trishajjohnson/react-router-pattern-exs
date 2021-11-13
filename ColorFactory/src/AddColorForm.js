import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddColorForm.css";

const AddColorForm = ({addColor}) => {
    const [form, setForm] = useState({color: "", hex: "#FFFFFF"});
    const history = useHistory();

    const handleChange = e => {   
        setForm(fdata => ({...fdata, [e.target.name]: e.target.value}));
    }
    console.log("color hex", form.hex);

    function handleSubmit(e) {
        e.preventDefault();
        addColor({[form.color]: form.hex});
        history.push("/colors");
    }

    const {color, hex} = form;

    return (
        <div className="AddColorForm">
            <h1>Add Color Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label className="input-label" htmlFor="color">Color Name</label>
                    <input name="color" id="color" value={color} placeholder={"Enter Color Name"} type="text" onChange={handleChange}/>
                </div>
                <div className="form-input">
                    <label className="input-label" htmlFor="hex">Hex Value</label>
                    <input name="hex" id="hex" value={hex} type="color" onChange={handleChange}/>
                </div>
                <button>Add Color</button>
            </form>
        </div>
    );
}

export default AddColorForm;