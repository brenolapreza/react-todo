import React, { Component } from 'react'


export default class Module extends Component {

        constructor(props){
            super(props);

            this.state = {
                valor: []
            }

            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

   
        handleChange(event) {
            this.setState({
                valor: event.target.value
            })
        }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.valor);
        event.preventDefault();
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.valor} onChange={this.handleChange} />
                <input type="submit" value="valor" />
                <h1>{this.state.valor}</h1>
            </form>

        );
    }
}
