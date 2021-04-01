import React, {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ username: evt.target.value})
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`)
        this.setState({ username: "" })
    }
    
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}    
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Form;