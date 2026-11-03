import React, { useState } from "react";

function App() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        resume: ""
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/apply", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        alert(await response.text());
    }

    return (
        <div>
            <h2>Job Application Form</h2>

            <form onSubmit={handleSubmit}>
                <input name="fullName" placeholder="Name"
                    onChange={handleChange} required /><br /><br />

                <input name="email" placeholder="Email"
                    onChange={handleChange} required /><br /><br />

                <input name="phone" placeholder="Phone"
                    onChange={handleChange} required /><br /><br />

                <input name="position" placeholder="Position"
                    onChange={handleChange} required /><br /><br />

                <input name="resume" placeholder="Resume Link"
                    onChange={handleChange} required /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;