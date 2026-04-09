import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./faq.css";

const Faq = () => {
  const [ismodel, setIsmodel] = useState(false);

  const data = [
    {
      question: "Is the University recognised by UGC?",
      answers: "Yes",
    },
    {
      question: "Is the University recognised by UGC?",
      answers: "Yes",
    },
    {
      question: "Is the University recognised by UGC?",
      answers: "Yes",
    },
  ];
  return (
    <>
      <div className="main_container">
        <h2>FAQ's</h2>
        <div className="containers">
          {/* {data.map((index, item) => (
            <div className="one" key={index}>
              <h3>{item.question}</h3>
            </div>
          ))} */}
          <div className="one">
            <h3>Is the University recognised by UGC?</h3>
            <span>
              <IoIosArrowDown
                onClick={() => setIsmodel(!ismodel)}
                style={{ cursor: "pointer" }}
              />
            </span>
          </div>
          {ismodel && (
            <div className="modal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              impedit esse recusandae delectus voluptate perspiciatis expedita,
              deserunt ratione culpa officia a suscipit earum voluptas et enim
              ipsa est quos cumque.
            </div>
          )}
          <div className="one">
            <h3>Is the University recognised by UGC?</h3>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="one">
            <h3>Is the University recognised by UGC?</h3>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
