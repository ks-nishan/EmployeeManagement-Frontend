import React, { Component } from "react";
import axios from "axios";

export default class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    console.log("Inside the method");
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/employee/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          employee: res.data.employee,
        });
        console.log(this.state.employee);
      }
    });
  }

  render() {
    return <div>Employee Details</div>;
  }
}
