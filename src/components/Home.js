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

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/employee/delete/${id}`).then((res) => {
      alert("Employee Deleted Succesfully!!!");
      this.retriveEmployees();
    });
  };

  filterData = (employees, key) => {
    const result = employees.filter((employee) => {
      return employee.type.includes(key);
    });
    this.setState({
      employees: result,
    });
  };

  handelSearchArea = (e) => {
    const key = e.currentTarget.value;

    axios.get("http://localhost:8000/employees").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingEmployees, key);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <p className="font-weight-bold">People</p>
        <div className="text-right row">
          <div className="col-lg-6 mt-2 mb-2">
            {/* <input
              className="form-control"
              type="search"
              onChange={this.handelSearchArea}
            ></input> */}
            <select
              className="form-control"
              type="search"
              onChange={this.handelSearchArea}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract Basis</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <button className="btn btn-primary">
              <a
                href="/create"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add People
              </a>
            </button>
          </div>
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
                <td>{"000" + index++}</td>
                <td>{employees.designation}</td>
                <td>{employees.type}</td>
                <td>{employees.experience}</td>
                <td>
                  <a className="text-primary" href={`/edit/${employees._id}`}>
                    Edit
                  </a>
                  &nbsp;&nbsp;
                  <a
                    className="text-danger"
                    href="#"
                    onClick={() => this.onDelete(employees._id)}
                  >
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
