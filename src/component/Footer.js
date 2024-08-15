import React from 'react';

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <div className='col d-flex justify-content-center align-items-center'>
        <button
          className='btn btn-danger mx-2'
          onClick={() => {
            props.resetQuantity();
          }}
        >
          Reset
        </button>
        <div className='text-bg-secondary btn text-white text-center col-2'>
          Total Amount : {props.totalAmount}
        </div>
        <button className='btn btn-primary mx-2'>
          Pay Now
        </button>
      </div>
    </div>
  );
}

