import React, {useState} from "react";

/**
 * A React functional component that renders a form with fields for username and age.
 * It handles form submission and input changes.
 *
 * @returns {JSX.Element} - The rendered form component.
 */
function Form() {
    const [state, setState] = useState({
        username: "", age: null
    });

    /**
     * Handles input change events. Updates the corresponding state property.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
     */
    const handleChange = event => setState({...state, [event.target.name]: event.target.value});

    /**
     * Handles form submission. Validates the age input and prevents form submission if age is not a number.
     *
     * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
     */
    const handleSubmit = event => {
        event.preventDefault();
        if (!Number(state.age)) {
            alert("Your age must be a number");
        }
    };

    return (<form onSubmit={handleSubmit}>
        <h1>
            Hello {state.username} {state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={handleChange}/>
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={handleChange}/>
        <br/>
        <br/>
        <input type="submit"/>
    </form>);
}

export default Form;