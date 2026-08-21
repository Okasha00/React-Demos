import React, { useState } from "react";

function SimpleForm() {
    const [formData, setFormData] = useState({name: "", email: ""});

    const handleChange = (e) =>{
        setFormData ({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submiited:",formData);
    };

    return (
        < form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            />

            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            />

            <button type="submit">Submit</button>
          
        </form>
    );
}

export default SimpleForm;
