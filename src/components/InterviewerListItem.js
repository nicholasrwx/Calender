import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const Itemname = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  const Imagename = classNames("interviewers__item-image", {
    "interviewers__item-image--selected": props.selected,
  });

  return (
    <li onClick={props.setInterviewer} className={Itemname}>
      <img
        className={Imagename}
        src={props.avatar}
        alt={props.name}
        selected={props.selected}
      />
      {props.selected && props.name}
    </li>
  );
}
