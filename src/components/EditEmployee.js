import React, { Component } from "react";
import axios from "axios";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      initial_name: "",
      display_name: "",
      gender: "",
      dob: "",
      email: "",
      phone: "",
      designation: "",
      type: "",
      joined_date: "",
      experience: "",
      salary: "",
      notes: "",
    };
  }

  handelInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const {
      full_name,
      initial_name,
      display_name,
      gender,
      dob,
      email,
      phone,
      designation,
      type,
      joined_date,
      experience,
      salary,
      notes,
    } = this.state;

    const data = {
      full_name: full_name,
      initial_name: initial_name,
      display_name: display_name,
      gender: gender,
      dob: dob,
      email: email,
      phone: phone,
      designation: designation,
      type: type,
      joined_date: joined_date,
      experience: experience,
      salary: salary,
      notes: notes,
    };

    console.log(data);

    axios
      .put(`http://localhost:8000/employee/update/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          alert("Employee Updated Successfully!!!");
          this.setState({
            full_name: "",
            initial_name: "",
            display_name: "",
            gender: "",
            dob: "",
            email: "",
            phone: "",
            designation: "",
            type: "",
            joined_date: "",
            experience: "",
            salary: "",
            notes: "",
          });
        }
      });
  };

  componentDidMount() {
    console.log("Inside the method");
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/employee/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          full_name: res.data.employee.full_name,
          initial_name: res.data.employee.initial_name,
          display_name: res.data.employee.display_name,
          gender: res.data.employee.gender,
          dob: res.data.employee.dob,
          email: res.data.employee.email,
          phone: res.data.employee.phone,
          designation: res.data.employee.designation,
          type: res.data.employee.type,
          joined_date: res.data.employee.joined_date,
          experience: res.data.employee.experience,
          salary: res.data.employee.salary,
          notes: res.data.employee.notes,
        });
        console.log(this.state.employee);
      }
    });
  }

  render() {
    const formLetter = {
      color: "blue",
      fontWeight: "bold",
    };

    return (
      <div>
        <div>
          <p className="font-weight-bold mt-3">Edit People</p>
          <hr></hr>
        </div>
        <form style={formLetter}>
          <div className="form-group">
            <label htmlFor="full_name">Full Name*</label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              placeholder="Denagama Withana Kushantha Charuka Silva"
              onChange={this.handelInputChange}
              value={this.state.full_name}
            ></input>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="initial_name">Name with initials*</label>
              <input
                type="text"
                className="form-control"
                id="initial_name"
                name="initial_name"
                placeholder="D. W. K. C. Silva"
                value={this.state.initial_name}
                onChange={this.handelInputChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="display_name">Preferred / Display Name</label>
              <input
                type="text"
                className="form-control"
                id="display_name"
                name="display_name"
                placeholder="Kushantha Charuka"
                value={this.state.display_name}
                onChange={this.handelInputChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                placeholder="Male"
                value={this.state.gender}
                onChange={this.handelInputChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                placeholder="1997-07-04"
                value={this.state.dob}
                onChange={this.handelInputChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="kushantha@betalaunch.io"
                value={this.state.email}
                onChange={this.handelInputChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="0129999999"
                value={this.state.phone}
                onChange={this.handelInputChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className="form-control"
                id="designation"
                name="designation"
                placeholder="UX Designer"
                value={this.state.designation}
                onChange={this.handelInputChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="type">Employee Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                placeholder="Full Time"
                value={this.state.type}
                onChange={this.handelInputChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="joined_date">Joined Date</label>
              <input
                type="date"
                className="form-control"
                id="joined_date"
                name="joined_date"
                placeholder="2020-02-10"
                value={this.state.joined_date}
                onChange={this.handelInputChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="experience">Experience</label>
              <input
                type="text"
                className="form-control"
                id="experience"
                name="experience"
                placeholder="03 Years"
                value={this.state.experience}
                onChange={this.handelInputChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 my-1">
              <label htmlFor="salary">Salary</label>
              <input
                type="text"
                className="form-control"
                id="salary"
                name="salary"
                placeholder="450,000.00"
                value={this.state.salary}
                onChange={this.handelInputChange}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="notes"> Personal Notes</label>
            <textarea
              className="form-control"
              id="notes"
              name="notes"
              rows="3"
              placeholder="Lorem ipsum dolor sit amet consectetur. Aenean feugiat enim mi ornare nibh nisl morbi sed. Lectus a pharetra"
              value={this.state.notes}
              onChange={this.handelInputChange}
            ></textarea>
          </div>
        </form>
        <div className="text-right mb-5">
          <button className="btn btn-light">Cancel</button>&nbsp;&nbsp;
          <button className="btn btn-primary" onClick={this.onSubmit}>
            Edit People
          </button>
        </div>
      </div>
    );
  }
}
