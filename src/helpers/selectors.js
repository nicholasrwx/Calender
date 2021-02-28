//import React from "react";

export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }

  const filteredDay = state.days.filter((stateDay) => stateDay.name === day);

  if (filteredDay.length === 0) {
    return [];
  }

  const result = [];

  for (let id of filteredDay[0].appointments) {
    result.push(state.appointments[id]);
  }

  return result;
}

export function getInterview(state, interview) {
  if (interview && Object.keys(interview).length) {
    const { student, interviewer: id } = interview;
    const data = state.interviewers[id];
    const result = { student, interviewer: data };
    return result;
  }

  return null;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }

  const filteredDay = state.days.filter((stateDay) => stateDay.name === day);
  if (filteredDay.length === 0) {
    return [];
  }

  const result = [];

  for (let id of filteredDay[0].interviewers) {
    result.push(state.interviewers[id]);
  }

  return result;
}
