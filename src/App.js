import React, {Component} from "react";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      newCount : ""
    }
  }

  isEven = (val) => {
    return val % 2 ===0? "Even" : "Odd";
  }

  updateNewCount = (event) => {
    this.setState({newCount: event.target.value})
  }

  updateCount = () => {
    this.setState({count: Number(this.state.newCount),
                  newCount: ""})
  }

  getClassName = (val) => {
    return val % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1"
  }

  handleClick = () => this.setState({count: this.state.count + 1})

  render = () =>
    <div>
      <table className="table table-striped table-bordered table-sm">
        <thead className="table-primary text-white">
          <tr><th>Value</th><th>Even?</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.count}</td>
            <td>{this.isEven(this.state.count)}</td>
          </tr>
        </tbody>
        <tfoot className="text-center">
          <tr>
            <td colSpan="2">
              <button className="btn btn-info m-2" onClick={this.handleClick}>
                Click Me to Plue One
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      {/* <h4 className={this.getClassName(this.state.count)}>
        <button className="btn btn-info m-2" onClick = {this.handleClick}>
         Click Me to Plus 1
        </button>
        Number of things: { this.isEven(this.state.count) }
      </h4> */}

      <div className="container-fluid">
        Update Value
        <div className="my-1">
          <div className="col-lg-1">
            <input className="form-control"
             value = {this.state.newCount}
             onChange={this.updateNewCount}/>
          </div>
          <button className="btn btn-info m-2"
            onClick={ this.updateCount }>Update</button>
        </div>


      </div>
    </div>


}