import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  // const selectCustomer = () => {
  //   props.selectCustomerCallback(props);
  // }

  return (
    // <tr>
    //   <td>{props.name}</td>
    //   <td>{props.phone}</td>
    //   <td>{props.accountCredit}</td>
    //   <td>{props.moviesCheckedOutCount}</td>
    //   <td><button onClick={ selectCustomer }>Select this customer</button></td>
    // </tr>
    <div>this is a button. the color is {props.color}</div>
  );
};

// Customer.propTypes = {
//   selectCustomerCallback: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   customerId: PropTypes.number.isRequired,
//   registeredAt: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   postal_code: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   accountCredit: PropTypes.number.isRequired,
//   moviesCheckedOutCount: PropTypes.number.isRequired,
// };

export default Button;