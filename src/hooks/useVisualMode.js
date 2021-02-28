import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(initial, replace = false) {
    if (replace) {
      history.pop();
    }
    setMode(initial);
    setHistory([...history, initial]);
  }

  function back() {
    if (history.length > 1) {
      history.pop();
      let id = history.length - 1;
      const previous = setMode(history[id]);
      return previous;
    }
  }
  return { mode, transition, back };
}
