import { useRef } from "react";

export default function HomePage() {
  const focusPoint = useRef(null);

  const eventHandler = (event) => {
    console.log(event.target.value);
    focusPoint.current.value = event.target.value;
  };

  return (
    <div>
      Learning!
      <input type="text" onChange={eventHandler}></input>
      <br />
      <br />
      <textarea ref={focusPoint} />
    </div>
  );
}
