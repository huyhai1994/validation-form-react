import React, {useState, useEffect} from "react";

function Form() {
    const [state, setState] = useState({
        username: "", age: null, errormessage: ""
    });
    const handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = "";
        if (nam === "age") {
            if (val !== "" && !Number(val)) {
                err = "Your age must be a number";
            }
        }
        setState({...state, [nam]: val, errormessage: err});
        /*TODO: the setState function is called to update the component's state. The spread operator (...) is used to create a new object that includes the current state, and then the nam and val variables are used to update the corresponding properties in the state. The errormessage property is also updated with the value of err.*/
    };

    return (<form>
        <h1>
            Hello {state.username} {state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={handleChange}/>
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={handleChange}/>
        {state.errormessage}
    </form>);
}

export default Form;