import React from "react";

const ServiceList = (props) => {
  return (
    <ul className="services paragraph">
      {props.services.map((service) => (
        <li>{service}</li>
      ))}
    </ul>
  );
};

export default ServiceList;
