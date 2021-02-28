import React, { useEffect } from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Error from "./Error";
import Confirm from "./Confirm";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import consts from "components/Appointment/constants";

export default function Appointment(props) {
  let { interview, id, bookInterview, interviewers, cancelling } = props;

  const { mode, transition, back } = useVisualMode(
    interview ? consts.SHOW : consts.EMPTY
  );
  useEffect(() => {
    if (interview === null && mode === consts.SHOW) {
      transition(consts.EMPTY);
    }
  }, [interview, transition, mode]);

  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    if (interview.interviewer && interview.student) {
      transition(consts.SAVING);

      bookInterview(id, interview)
        .then(() => {
          transition(consts.SHOW);
        })
        .catch(() => transition(consts.ERROR_SAVE, true));
    }
  };

  const cancelInterview = function (id) {
    transition(consts.DELETING, true);

    cancelling(id)
      .then(() => {
        transition(consts.EMPTY);
      })
      .catch(() => {
        transition(consts.ERROR_DELETE, true);
      });
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === consts.EMPTY && (
        <Empty onAdd={() => transition(consts.CREATE)} />
      )}
      {mode === consts.CREATE && (
        <Form interviewers={props.interviewers} onSave={save} onCancel={back} />
      )}
      {mode === consts.SHOW && interview && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={() => transition(consts.CONFIRM)}
          onEdit={() => transition(consts.EDIT)}
        />
      )}
      {mode === consts.SAVING && <Status message="Saving" />}
      {mode === consts.DELETING && <Status message="Deleting" />}
      {mode === consts.CONFIRM && (
        <Confirm
          onConfirm={() => cancelInterview(props.id)}
          onCancel={() => transition(consts.SHOW)}
          message="Delete the Appointment?"
        />
      )}
      {mode === consts.EDIT && (
        <Form
          name={interview.student}
          interviewers={interviewers}
          interviewer={interview.interviewer.id}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === consts.ERROR_SAVE && (
        <Error
          message="Could not save appointment."
          onClose={() => transition(consts.CREATE)}
        />
      )}
      {mode === consts.ERROR_DELETE && (
        <Error
          message="Could not delete appointment."
          onClose={() => transition(consts.SHOW)}
        />
      )}
    </article>
  );
}
