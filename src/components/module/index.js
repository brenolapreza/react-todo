import React, { Component } from 'react'


export default class Module extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tarefa: "",
            tarefas: ["Tarefa 1 ", "Tarefa 2 ", "Tarefa 3 ", "Tarefa 4 "]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        this.setState({
            tarefa: event.target.value
        })
    }

    handleSubmit(event) {
        this.setState({
            tarefa: "",
            tarefas: [].concat(this.state.tarefas, this.state.tarefa),
        })
        event.preventDefault();

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.tarefa} onChange={this.handleChange} />
                    <input type="submit" value="valor" onClick={this.handleSubmit}/>
                </form>
                <ul>
                    {this.state.tarefas.map( tarefa => ( <li>{tarefa}</li> ) )}
                </ul>
            </>

        );
    }
}
