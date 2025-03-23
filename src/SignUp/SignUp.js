import "./SignUp.css";
import React from "react";

export default function SignUp(){
    const Inputs = [
        {id: crypto.randomUUID(), name: 'username', type: 'text'},
        {id: crypto.randomUUID(), name: 'email', type: 'email'},
        {id: crypto.randomUUID(), name: 'password', type: 'password'},
        {id: crypto.randomUUID(), name: 'address', type: 'text'},
        {id: crypto.randomUUID(), name: 'ZIP Code', type: 'number'},
        {id: crypto.randomUUID(), name: 'City', type: 'text'},
    ]
    return(
        <div className="AllCon">
            <div className="BoxCon">
                <div className="LogoCon">
                    <img src={require("./../Images/892143.webp")} alt="Logo" loading="lazy" />
                </div>
                <div className="TextCon">
                    {
                        Inputs.map(input => (
                            <label key={input.id}> {input.name}:
                                <input type={input.type} name={input.name} />
                            </label>
                        )
                    )
                    }
                    <button className="submitBtn">Submit</button>
                </div>
            </div>
        </div>
    )
}