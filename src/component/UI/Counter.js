import React from "react";

import "../../styles/counter.css";

const counterData = [
  {
    id:1,
    number: 50,
    text: "Clients",
  },
  {
    id:2,
    number: 40,
    text: "Running Projects",
  },
  {
    id:3,
    number: 45,
    text: "Projects completed",
  },
];
const Counter = () => {
  return (
    <section className='counter' id="projects">
      <div className='container'>
        <div className='counter__wrapper'>
          {counterData.map((item) => (
            <div className='counter__item' key={item.id}>
              <h3 className='counter__number'>{item.number}</h3>
              <h4 className='counter__title'>{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
