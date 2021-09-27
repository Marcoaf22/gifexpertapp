import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FirstApp = ({ nombre, saludo }) => {
  return (
    <Fragment>
      <h1>Hola {nombre}</h1>
      <p>{saludo}</p>
    </Fragment>
  );
};

FirstApp.propTypes = {
  nombre: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  nombre: "marco",
  saludo: "como estas",
};

export default FirstApp;
