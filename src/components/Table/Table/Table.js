import { useState, useEffect } from "react";
import clients from "../../../modules/Clients";
import rows from "../../../modules/Rows";
import TimeValueHeader from "./TimeValueHeader";

function Table() {
  const [stateTime, setStateTime] = useState(true);
  const [activeId, setActiveId] = useState("");
  const [timeValue, setTimeValue] = useState("420");

  const setZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const min = setZero(Math.floor((timeValue / 60) % 60));
  const sec = setZero(Math.floor(timeValue % 60));

  useEffect(() => {
    if (timeValue > 0) {
      setTimeout(setTimeValue, 1000, timeValue - 1);
    } else {
      setTimeValue(0);
    }
    return () => clearTimeout(setTimeValue);
  }, [timeValue]);

  const setActive = (value) => {
    setStateTime(!stateTime);
    setActiveId(value);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">{rows[0]}</th>
          <TimeValueHeader
            clients={clients}
            setActiveId={setActiveId}
            setActive={setActive}
            activeId={activeId}
            min={min}
            sec={sec}
          />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{rows[1]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.client}</td>
          ))}
        </tr>
        <tr>
          <td>{rows[2]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.todo}</td>
          ))}
        </tr>
        <tr>
          <td>{rows[3]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.createDay}</td>
          ))}
        </tr>
        <tr>
          <td>{rows[4]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.warrantyTime}</td>
          ))}
        </tr>
        <tr>
          <td>{rows[5]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.prepayment}</td>
          ))}
        </tr>
        <tr>
          <td>{rows[6]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.price}</td>
          ))}
        </tr>
        <tr>
          <td>{rows[7]}</td>
          {clients.map((el, index) => (
            <td key={index}>{el.action}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
