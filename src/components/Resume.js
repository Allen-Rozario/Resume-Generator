import React, { useState } from "react";
import { resumedetailsservice } from "../services/resumeService";

function Resume(props) {
  let initValue = {
    fullname: "",

    mobile: "",

    email: "",
  };

  let [forms, setForm] = useState({ ...initValue });

  let formhandeling = (event) => {
    let { name, value } = event.target;

    forms[name] = value;

    setForm({ ...forms });
  }; //form handling
  let submitform = async (event) => {
    event.preventDefault();

    try {
      let { status, message } = await resumedetailsservice(forms);

      if (status) {
        alert("Success");

        // navigate("/");
      } else {
        alert(message);
      }
    } catch (error) {
      alert("Server error");

      console.log(error);
    }
  };
  return (
    <form action="" id="reg-form" className="form" onSubmit={submitform}>
      <div className="fw-bold ">
        <h2 className="page-title ">SMART RESUME BUILDER</h2>
      </div>

      <ul class="nav nav-pills nav-pos mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active text-white fw-bold"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            BASIC DETAILS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-white fw-bold"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            QUALIFICATION DETAILS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-white fw-bold"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            WORK EXPERIENCE
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-white fw-bold"
            id="pills-work-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-work"
            type="button"
            role="tab"
            aria-controls="pills-work"
            aria-selected="false"
          >
            PROJECT DETAILS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-white fw-bold"
            id="pills-summary-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-summary"
            type="button"
            role="tab"
            aria-controls="pills-summary"
            aria-selected="false"
          >
            SUMMARY
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-white fw-bold"
            id="pills-others-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-others"
            type="button"
            role="tab"
            aria-controls="pills-others"
            aria-selected="false"
          >
            OTHERS
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="fs-3 title mt-5">BASIC DETAILS</div>
          <div className=" frm mt-3">
            Choose Profile Picture{" "}
            <div className="m-2">
              {" "}
              <input
                type="file"
                name="filename"
                accept="image/gif, image/jpeg, image/png"
              ></input>
            </div>
          </div>

          <div className="mt-4 frm">
            <label>
              <span className="fa fa-user"></span> Name
            </label>
            <input
              type="text"
              className="form-control "
              name="fullname"
              // defaultValue={User.fullname}
              id="fullname"
              placeholder="eg. Allen Rozario"
              onChange={formhandeling}
              value={forms.fullname}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-mobile"></span> Mobile
            </label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              // defaultValue={User.phonenumber}
              id="phonenumber"
              placeholder="eg +91 9459393020"
              onChange={formhandeling}
              value={forms.mobile}
            />
          </div>
          <div className="frm mt-2">
            <label>
              <span className="fa fa-envelope"></span> Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              // defaultValue={User.email}
              id="email-id"
              placeholder="eg.allen@gmail.com"
              onChange={formhandeling}
              value={forms.email}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Address
            </label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              // defaultValue={User.phonenumber}
              // id="companyname"
              placeholder="Enter the Address "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>State
            </label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              // defaultValue={User.phonenumber}
              // id="companyname"
              placeholder="Enter the State"
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>City
            </label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              // defaultValue={User.phonenumber}
              // id="companyname"
              placeholder="Enter the City Name "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>PINCODE
            </label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              // defaultValue={User.phonenumber}
              // id="companyname"
              placeholder="Enter Valid Pin Code "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">Marital Status</div>
          <select class="form-select frm  " aria-label="Default select example">
            <option selected>Select Option </option>
            <option value="1">Married</option>
            <option value="2">Unmarried</option>
          </select>
          <div className="mt-2 frm">Select Gender</div>
          <select class="form-select frm  " aria-label="Default select example">
            <option selected>Select Option</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option>
          </select>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>DOB
            </label>
            <input
              type="date"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="eg.Indegene"
              placeholder="eg.Front End Developer "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Languages Known
            </label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              // defaultValue={User.phonenumber}
              // id="companyname"
              placeholder="eg. Tamil,English "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-github"></span> Github Link
            </label>
            <input
              type="text"
              className="form-control"
              name="github"
              // defaultValue={User.phonenumber}
              // id="phonenumber"
              placeholder="eg. www.github.com"
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>

          <div className="mt-2 frm">
            <label>
              <span className="fa fa-linkedin"></span> linkedin
            </label>
            <input
              type="link"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              // id="phonenumber"
              placeholder="www.linkedin.com"
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="fs-3 mt-5 title">QUALIFICATION DETAILS</div>

          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>College Details
            </label>
            <input
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="companyname"
              placeholder="eg.Sri Krishna "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>University Details
            </label>
            <input
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="companyname"
              placeholder="eg.Anna University "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Start Date
            </label>
            <input
              type="date"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="eg.Indegene"
              placeholder="eg.Front End Developer "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>End Date
            </label>
            <input
              type="date"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="eg.Indegene"
              placeholder="eg.Front End Developer "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>GRADE
            </label>
            <input
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="companyname"
              placeholder="Enter the Grade"
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="fs-3 mt-5 title">WORK EXPERIENCE</div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span> Work Experience
            </label>
            <textarea
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              // id="phonenumber"
              placeholder="eg.Previous working experiences "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Job Title
            </label>
            <input
              type="text"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              // id="phonenumber"
              placeholder="eg.Front End Developer "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Company Name
            </label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              // defaultValue={User.phonenumber}
              // id="companyname"
              placeholder="eg.Indegene "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Start Date
            </label>
            <input
              type="date"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="eg.Indegene"
              placeholder="eg.Front End Developer "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>End Date
            </label>
            <input
              type="date"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="eg.Indegene"
              placeholder="eg.Front End Developer "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-work"
          role="tabpanel"
          aria-labelledby="pills-work-tab"
        >
          <div className="fs-3 mt-5 title">PROJECT DETAILS</div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Enter Project Name
            </label>
            <input
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="companyname"
              placeholder="eg.Chat App "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span> Overview of the Project
            </label>
            <textarea
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="phonenumber"
              placeholder="eg.overview of the project "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span>Role
            </label>
            <input
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="companyname"
              placeholder="Enter Role "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-summary"
          role="tabpanel"
          aria-labelledby="pills-summary-tab"
        >
          <div className="fs-3 title mt-5">SUMMARY</div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span> Summary
            </label>
            <textarea
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="phonenumber"
              placeholder="Enter Your Objective/Summary "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-others"
          role="tabpanel"
          aria-labelledby="pills-others-tab"
        >
          <div className="fs-3 title mt-5">OTHERS</div>
          <div className="mt-2 frm">
            <label>
              <span className="fa fa-work"></span> Others
            </label>
            <textarea
              type="text-area"
              className="form-control"
              name="linkedin"
              // defaultValue={User.phonenumber}
              id="phonenumber"
              placeholder="Enter Something "
              // onChange={formhandeling}
              // value={forms.mobile}
            />
          </div>

          <button
            className="save-btn mt-5 mb-5 btn btn-success text-light fw-bolder bta"
            style={{ width: "300px" }}
          >
            Download
          </button>
        </div>
      </div>
    </form>
  );
}

export default Resume;
