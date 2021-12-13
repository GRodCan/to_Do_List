import React, { Component } from "react";

class Target extends Component {
  constructor(props) {
    super(props)

    this.state = {
        hour: this.props.info.hour || "No especificado" 
    }
}

render() {
    const {name,date,description} = this.props.info

    return (
        <div>
            <h3>{name}</h3>
            <p>Momento: {this.state.hour} <br /> Fecha: {date}</p>
            <p>{description}</p>
            <button onClick={this.props.delete}>Borrar</button>
        </div>
    )
}
}

export default Target;
