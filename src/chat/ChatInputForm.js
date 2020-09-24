import React from "react";

export class ChatInputForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {message: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        this.props.onSubmit(this.state.message);
        
        this.setState({message: ''})

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="input-message" value={this.state.message} onChange={this.handleChange}/>
                <button type="submit" name="submit">Enter</button>
            </form>
        );
    }
}