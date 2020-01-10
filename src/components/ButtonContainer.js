import React from 'react';
import PatternButton from './PatternButton';
import ColorButton from './ColorButton';
// import Button from './Button';
import PropTypes from 'prop-types';

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // for(var index in items) {
  //   document.write( index + " : " + items[index] + "<br />");
  // }

  makeButtonCollection () {
    var buttonCollection = [];
    if (this.props.type === "pattern") {
      buttonCollection = this.props.buttonLabels.map((label, i) => {
        return <PatternButton pattern={label}/>
      });
    } else if (this.props.type === "color") {
      // buttonCollection = this.props.buttonLabels.map(key, value, i) => {
      //   return <ColorButton color={key} rbg={index}/>
      // });
      for(var index in this.props.buttonLabels) {
          buttonCollection.push( <ColorButton color={index} rgb={this.props.buttonLabels[index]} /> )
      }
    } 

    return buttonCollection;
  }

  render () {
    return (
      <div>
      <h3>{this.props.containerName}: select a button below to choose a {this.props.type}!</h3>
      
      {this.makeButtonCollection()}
    
      </div>
    );
  }
};

ButtonContainer.propTypes = {
  containerName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonLabels: PropTypes.array.isRequired,
};

export default ButtonContainer;