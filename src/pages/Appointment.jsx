import React, { useState } from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Appointment.css";
import { Button } from "react-bootstrap";

function Appointment() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "department") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        doctor: "",
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();

    const { name, email, phone, date, department, doctor } = formData;

    const UserAppointmentData = {
      Name: name,
      Email: email,
      Phone: phone,
      Date: date,
      Department: department,
      Doctor: doctor,
    };

    // Print the list on the console
    // console.log("Appointment Data:", UserAppointmentData);

    // Clear the form data after submission
    setFormData(initialFormData);
  };

  function appointmentData() {
    const departmentsList = [
      {
        departmentId: "general-medicine",
        name: "General Medicine",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "The department of general medicine deals with the prevention, diagnosis, and treatment of adult diseases. With experienced doctors in the field, the department provides the best possible primary care.",
      },
      {
        departmentId: "cardiology",
        name: "Cardiology",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "The department of cardiology diagnoses and provides treatment for disorders related to the heart and cardiovascular system. We provide OPD based care for our patients.",
      },
      {
        departmentId: "pediatrics",
        name: "Pediatrics",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "The department provides medical care to infants, children, adolescents, and young adults. We provide outpatient services as well as inpatient service which includes assessments and vaccinations.",
      },
      {
        departmentId: "orthopedics",
        name: "Orthopedics",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "Provide medical care for issues related to the musculoskeletal system and treating injuries to bones, joints, ligaments, or tendons. We also have a well-equipped physiotherapy unit.",
      },
      {
        departmentId: "nephrology",
        name: "Nephrology",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "Provides OPD based medical care for diseases related to the kidney. We also have a dialysis unit providing treatment for kidney failure. ",
      },
      {
        departmentId: "emergency-medicine",
        name: "Emergency Medicine",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "We provide 24*7 emergency care to patients who need immediate care.",
      },
    ];

    const doctorsList = [
      {
        departmentId: "general-medicine",
        name: "Dr N Damodaran",
        qualifications: "MBBS, MD",
        role: "Chief Physician",
        opTimings: "Monday- Saturday, 6.00 PM- 9.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "cardiology",
        name: "Dr Philipose John",
        qualifications: "MBBS, MD, DM",
        role: "Cardiologist",
        opTimings: "Saturday, 12.00 PM – 1.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "pediatrics",
        name: "Dr Sunnychen Devasia",
        qualifications: "MBBS, DCH",
        role: "Pediatrician",
        opTimings: "Monday- Saturday, 11.30 AM- 1.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "orthopedics",
        name: "Dr Varkey S Kulangara",
        qualifications: "MBBS, MS, DNB, MRCS",
        role: "Orthopedic Surgeon",
        opTimings: "Monday, Tuesday, Thursday, 5.30 PM- 8.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "nephrology",
        name: "Dr Sneha Anna Joy",
        qualifications: "MBBS, MD, DM",
        role: "Consultant Nephrologist",
        opTimings: "1st & 3rd Saturday, 11.00 AM- 12.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "emergency-medicine",
        name: "Dr Rohan Chacko Jacob",
        qualifications: "MBBS",
        role: "Casualty Medical Officer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        opTiming: "mon-fri 9am - 5pm",
      },
      {
        departmentId: "emergency-medicine",
        name: "Dr Sara Jacob",
        qualifications: "MBBS",
        role: "Casualty Medical Officer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "emergency-medicine",
        name: "Dr Midhun Raj",
        qualifications: "MBBS",
        role: "General Practitioner",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
    ];

    return (
      <div className="container">
        <form
          onSubmit={handleSubmitAppointment}
          method="post"
          role="form"
          className="email-form"
        >
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="text"
                placeholder="Select Date & Time"
                onFocus={(e) => (e.target.type = "datetime-local")}
                name="date"
                className="form-control datepicker"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                {departmentsList.map((department) => (
                  <option
                    key={department.departmentId}
                    value={department.departmentId}
                  >
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="doctor"
                id="doctor"
                className="form-select"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                {formData.department &&
                  doctorsList
                    .filter(
                      (doctor) => doctor.departmentId === formData.department
                    )
                    .map((doctor) => (
                      <option key={doctor.name} value={doctor.name}>
                        {doctor.name}
                      </option>
                    ))}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <button className="click-btn">
              <span>Make Appointment</span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Appointment" />
      <section className="appointment" id="appointment">
        <Sectionhead
          sectionname="Appointment"
          sectiondescription="Make an"
          sectiondescriptionbold="Appointment"
        />
        {appointmentData()}
      </section>
    </>
  );
}

export default Appointment;
