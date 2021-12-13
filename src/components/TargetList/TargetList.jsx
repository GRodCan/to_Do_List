import React, { Component } from "react";
import Target from "./Target";
import FormNewTarget from "./FormNewTarget";
import data from "../../data"

class TargetList extends Component {
  constructor(props) {
    super(props)

    this.state = {
        
        targetList: data // [{},{},{},{},{},{}] --> Para guardar los productos
    }
}

  paintProducts = () => {
    
    return this.state.targetList.map((target, i) => <Target info={target} delete={()=>this.deleteTarget(i)} key={i} />)
}

  createTarget = (name, hour, date, description)=>{
    const newTarget={name, hour, date, description}
    this.setState({ targetList: [...this.state.targetList, newTarget] })
  }
  deleteTarget = (i)=>{
    
    const targets = this.state.targetList.filter((target, j) => j !== i)
        return this.setState({ targetList: targets })

  }
  deleteAllTargets=()=>{
    return this.setState({ targetList: [] })
  }
  resetTargets=()=>{
    return this.setState({ targetList: data })
  }

  render() {
    return <div>
      <FormNewTarget create={ this.createTarget} />
      {this.paintProducts()}
      <br />
      <button onClick={this.deleteAllTargets}>Borrar todo</button>
      <button onClick={this.resetTargets}>Reset</button>
      
    </div>;
  }
}

export default TargetList;
