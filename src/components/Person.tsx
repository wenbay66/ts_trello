import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

type studentInfo = {
  age: number;
  sax: "man" | "woman";
};

type studentNames = "Amy" | "Ariean";

type studentList = Record<studentNames, studentInfo>;

type studentList1 = Pick<studentInfo, 'age'>;

export const Person = (props: PersonProps) => {
  
  const aa: Partial<studentList> = {
    Ariean: {
      age: 25,
      sax: "man",
    },
  };

  console.log(aa);

  const bb:studentList1 = {
    age: 123,
    // sax: 'man'
  }

  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
