/**
 * This is a React functional component that renders a form with fields for username and age.
 * It also includes a handleChange function to handle changes in the input fields.
 *
 * @function Form
 * @returns {JSX.Element} - A React JSX element representing the form.
 */
import React, {useState} from "react";

function Form() {
    /**
     * The state object holds the current values of the username and age fields.
     *
     * @type {{username: string, age: number | null}}
     */
    const [state, setState] = useState({
        username: "", age: null
    });

    /**
     * This function is called when the user changes the value in the input fields.
     * It updates the state object with the new values and performs validation for the age field.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
     */
    const handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam, val);
        if (nam === "age") {
            if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        setState({...state, [nam]: val});
    };

    return (<form>
        <h1>
            Hello {state.username} {state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={handleChange}/>
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={handleChange}/>
    </form>);
}

export default Form;