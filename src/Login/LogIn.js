import "./LogIn.css"


export  default function LogIn(){
    const Inputs = [
        {id: crypto.randomUUID(), name: 'username', type: 'text'},
        {id: crypto.randomUUID(), name: 'email', type: 'email'},
        {id: crypto.randomUUID(), name: 'password', type: 'password'},
    ]
    return(

       <>
            <div className="AllCon">
                <div className="BoxCon">
                    <div className="logoCon">
                        <img src={require("./../Images/892143.webp")} alt="LOGO" loading="lazy" />
                    </div>
                    <div className="TextCon">
                        {Inputs.map(input => (
                            <label key={input.id}> {input.name}:
                                <input type={input.type} name={input.name} />
                            </label>
                          )
                         )
                        }
                            <button className="submitBtn">submit</button>
                    </div>
                </div>
            </div>
       </>

    )
}