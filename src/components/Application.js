import React, { useState } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index";


const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


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
    id: 3,
    time: "3pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png",
      }
    }
  },
  {
    id: 4,
    time: "4pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      }
    }
  },
  {
    id: 5,
    time: "5pm"
    }
  



];




export default function Application(props) {

  const [day, setDay] = useState("Monday");


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"><DayList
  days={days}
  day={day}
  setDay={setDay}
/></nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {
         appointments.map(appointment => <Appointment key={appointment.id} {...appointment} />) 
        }
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}



//interviewer ID's are all the same, 
//for now it's ok.

//THESE ARE KIND OF THE SAME THING, BUT USING THE TAG
//MAKES IT EASIER TO PASS INDIVIDUAL VARS
//Appointment(appointment)
//<Appointment key={appointment.id} {...appointment} />


//ABOUTH THE LAST APPOINTMENT
// Just like in our stories earlier, due to the CSS, 
// we'll need to add one last Appointment to the end 
// of the list representing the last appointment for 
// the day. We should also check the console to make 
// sure each Appointment has a key.