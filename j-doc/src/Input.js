import React, {Component} from 'react'

export default class Input extends Component {
    state = {
        input: []
    }

    render() {
        return (
            <input className="input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            />
        );
    }
}



