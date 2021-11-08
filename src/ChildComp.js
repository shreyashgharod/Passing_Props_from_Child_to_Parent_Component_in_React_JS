import React from "react";

export default function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.realname("Bruce Wayne")}>
        Reveal Identity
      </button>
    </div>
  );
}
