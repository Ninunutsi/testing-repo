import React, { Component } from 'react'

export default class Class extends Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
    }

    componentDidMount() {
        console.log("did mount")
    }
    componentDidUpdate(){
        console.log('did update')
    }
    // shouldComponentUpdate(){
     //   if(prevState !== this.state...){
        // return true
  //   }
    //     return false
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState)

        return null
    }
  render() {
    const {name} = this.props
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>increment</button>
      </div>
    )
  }
}
