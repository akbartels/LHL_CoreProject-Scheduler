import React, { useState, useEffect } from "react";

import axios from "axios";

import Appointment from "components/Appointment/index";
import DayList from "components/DayList";

import "components/Application.scss";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 1,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Saniya Sood",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 3,
    time: "4pm",
    interview: {
      student: "Lizzie-Forrester Collins",
      interviewer: {
        id: 2,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png",
      }
    }
  }
];



export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/days")
      .then(response => setDays(response.data))
  },[])

  const appointmentsList = appointments.map(appointment => {
    return (
      <Appointment 
        key={appointment.id}
        {...appointment}
      />
    )
  })
  
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={days}
          day={day}
          setDay={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {appointmentsList}
        <Appointment id="last" time="6pm" />
      </section>
    </main>
  );
}


