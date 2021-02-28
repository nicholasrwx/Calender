import { useState, useEffect } from "react";
const axios = require("axios");

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8001/api/days`),
      axios.get(`http://localhost:8001/api/appointments`),
      axios.get(`http://localhost:8001/api/interviewers`),
    ]).then((all) => {
      const days = all[0].data;
      const appointments = all[1].data;
      const interviewers = all[2].data;
      const updatedState = { ...state, days, appointments, interviewers };
      setState(updatedState);
    });
  }, []);

  const updateSpots = function (day, days, appointments) {
    const dayObj = days.find((item) => item.name === day);

    const appointmentIDs = dayObj.appointments;
    let spots = 0;
    for (const id of appointmentIDs) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    const newDayObj = { ...dayObj, spots };
    const newArray = days.map((item) => (item.name === day ? newDayObj : item));
    return newArray;
  };

  const setDay = (day) => {
    setState({ ...state, day });
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        let days = updateSpots(state.day, state.days, appointments);
        setState((prev) => ({ ...prev, appointments, days }));
      });
  }

  function cancelling(id) {
    let interview = null;

    const appointment = {
      ...state.appointments[id],
      interview: interview,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        let days = updateSpots(state.day, state.days, appointments);
        setState((prev) => ({ ...prev, appointments, days }));
      });
  }

  return { state, setDay, bookInterview, cancelling };
}
