import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggeeIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {props.name} you have {props.messageCount}
      </h2>
    </div>
  );
};

export default Greet;
