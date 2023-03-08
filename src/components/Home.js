import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    console.log("method called");
    this.retriveEmployees();
  }

  retriveEmployees = () => {
    axios.get("http://localhost:8000/employees").then((res) => {
      if (res.data.success) {
        this.setState({
          employees: res.data.existingEmployees,
        });
        console.log(this.state.employees);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <p className="font-weight-bold">Peoples</p>
        <div className="text-right">
          <button className="btn btn-primary">
            <a
              href="/create"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add People
            </a>
          </button>
        </div>
        <br></br>
        <table className="table">
          <thead>
            <tr>
              <th>Display Name</th>
              <th>Emp Id</th>
              <th>Desigination</th>
              <th>Emp Type</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employees, index) => (
              <tr>
                <td>
                  <a
                    href={`/employee/${employees._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {employees.display_name}
                  </a>
                </td>
                <td>{index + 1}</td>
                <td>{employees.designation}</td>
                <td>{employees.type}</td>
                <td>{employees.experience}</td>
                <td>
                  <a className="text-primary" href="#">
                    Edit
                  </a>
                  &nbsp;&nbsp;
                  <a className="text-danger" href="#">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
