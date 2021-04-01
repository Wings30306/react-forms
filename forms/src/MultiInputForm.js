import React, {Component} from "react";

class MultiInputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value}) 
        // set name of event target to be the key to change. Make sure this is added in the form and IDENTICAL to state keys!
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`)
        this.setState({ username: "" })
    }
    
    render() {
        return (
            <div>
                <h1>Multi-Input Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}    
                    />
                    <input 
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        onChange={this.handleChange}
                    />
                    <input 
                        name="password"
                        type="password" 
                        placeholder="Password"
                        onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default MultiInputForm;