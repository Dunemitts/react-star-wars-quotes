// src/components/Quote.js
import React from 'react';

const Quote = ({ text }) => {
  return (
    <div className="col-sm-4 mb-2">
      <div className="card">
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
