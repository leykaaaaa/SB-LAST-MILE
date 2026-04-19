import React from 'react';

function Display({ value }) {
  return (
    <h2 style={{ marginTop: "20px" }}>
      The counter value is: {value}
    </h2>
  );
}

export default Display;