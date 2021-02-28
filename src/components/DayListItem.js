import React from "react";

import classNames from "classnames";

import "components/DayListItem.scss";

//This is the daylist Item COMPONENT

export default function DayListItem(props) {
  const Itemname = classNames("day-list__item", {
    "--selected": props.selected,
    "--full": props.full,
  });

  function formatSpots(props) {
    if (props.spots === 0) {
      return `no spots remaining`;
    } else if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    } else if (props.spots >= 2) {
      return `${props.spots} spots remaining`;
    }
  }

  return (
    <li onClick={() => props.setDay(props.name)}>
      <h3 className={Itemname}>
        {props.name}
        <div>{formatSpots(props)}</div>
      </h3>
    </li>
  );
}

// the above is the JSX equivalent of this -> <DayListItem/>

//<li> represents entire Day Item
//<h2> Display the Name
//<h3> Should display the spots remaining for a day

// (name, spots, selected) and one action (setDay) as props,
// so we'll need to update our DayListItem component to reflect
// this after building our stories.

// return (
//   <button
//     className={buttonClass}
//     onClick={props.onClick}
//     disabled={props.disabled}
//   >
//     {props.children}
//   </button>
// );
