import React from 'react';
// import PatternButton from './PatternButton';
// import ColorButton from './ColorButton';
import Button from './Button';
import PropTypes from 'prop-types';

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // setCustomer = (customer) => {
  //   this.props.setCustomerCallback(customer);
  // }

  makeButtonCollection () {
    const buttonCollection = this.props.buttonNames.map((button, i) => {
      return <Button
        color={button}
        // customerId={customer.id}
        // registeredAt={customer.registered_at}
        // address={customer.address}
        // city={customer.city}
        // state={customer.state}
        // postal_code={customer.postal_code}
        // phone={customer.phone}
        // accountCredit={customer.account_credit}
        // moviesCheckedOutCount={customer.movies_checked_out_count}
        // selectCustomerCallback={this.props.setCustomerCallback}
        // key={i}
      />;
      }
    );

    return buttonCollection;
  }

  render () {
    return (
      <div>
      <h3>{this.props.containerName}: select a button below to choose a {this.props.type}!</h3>
      
    
        {this.makeButtonCollection()}
        {/* <Button color="hello"/> */}
    
      </div>
    );
  }
};

ButtonContainer.propTypes = {
  // setCustomerCallback: PropTypes.func.isRequired,
  containerName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonNames: PropTypes.array.isRequired,
};

export default ButtonContainer;