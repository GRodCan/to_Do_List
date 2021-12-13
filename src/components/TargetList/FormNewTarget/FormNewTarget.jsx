import React, { Component } from "react";

class FormNewTarget extends Component {

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value
    const hour = event.target.hour.value
    const date = event.target.date.value
    const description = event.target.description.value
    
    // Crear producto
    this.props.create(name,hour,date,description)
}

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Tarea:</label><br/>
      <input type="text" id="name" name="name"/><br />
      <label htmlFor="date">Fecha:</label><br/>
      <input type="date" id="date" name="date"/><br/>
      <label htmlFor="hour">Hora:</label><br/>
      <input type="time" id="hour" name="hour"/><br />
      <label htmlFor="description">Descripción:</label><br/>
      <input type="text" id="description" name="description"/><br />
      <input type="submit"/>
    </form>;
  }
}

export default FormNewTarget;
