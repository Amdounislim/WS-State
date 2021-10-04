import React, { Component } from 'react'
import "./App.css"
import Counter from './components/Counter'

export default class App extends Component {
  // constructor(props){
  //   super(props)
  //     this.state={
  //       title:"WS-State"
  //     }
  // }

  state = {
    title: "WS-State",
    nbr: 10,
    obj: {
      name: "Mohamed",
      email: "med@gmail.com"
    },
    arr: [1, 2, 3],
    count: 0
  }


  add = (y) => {
    this.setState({
      arr: [...this.state.arr, y]
    })
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { title, nbr, obj } = this.state
    return (
      <div className="App">
        {/* <h1>{this.state.title}</h1>
        <h3>{this.state.nbr}</h3>
        <p>{this.state.obj.name}</p>
        <p>{this.state.obj.email}</p> */}
        {/* <h1>{title}</h1>
        <h3>{nbr}</h3>
        <p>{obj.name}</p>
        <p>{obj.email}</p> */}

        {/* <div>{this.state.arr.map(el => <h5>{el}</h5>)}</div> */}
        {/* <button onClick={this.increment}>+</button> */}
        {/* <span>{this.state.count}</span> */}
        {/* <Counter count={this.state} />
        <button onClick={this.decrement}>-</button> */}
        <Counter add={this.add} />
      </div>
    )
  }
}

