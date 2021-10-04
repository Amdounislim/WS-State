import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        x:0
    }

    handelChange=(e)=>{
        this.setState({
            x: e.target.value
        })
    }
    render() {
        return (
            <div>
                {/* <h2>{this.props.count}</h2> */}

                <input type="text" onChange={this.handelChange} />
                <button onClick={()=>this.props.add(+this.state.x)}>Add</button>
            </div>
        )
    }
}
