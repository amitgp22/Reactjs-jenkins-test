import React from 'react';
import PropTypes from 'prop-types';

export default function User({ name, age }) {
  return (
    <>
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Age: ${age}`}</h2>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
