import React from 'react';
import PatternButton from './PatternButton';
import ColorButton from './ColorButton';
import PropTypes from 'prop-types';

class ButtonContainer extends React.Component {

  makeButtonCollection () {
    var buttonCollection = [];
    if (this.props.type === "pattern") {
      buttonCollection = this.props.buttonLabels.map((label, i) => {
        return <PatternButton pattern={label} key={i}/>
      });
    } else if (this.props.type === "color") {
      for(var index in this.props.buttonLabels) {
          buttonCollection.push( <ColorButton color={index} rgb={this.props.buttonLabels[index]} key={index}/> )
      }
    } 

    return buttonCollection;
  }

  render () {
    return (
      <div>
      <h3><strong>{this.props.containerName}:</strong> 
      
      {this.makeButtonCollection()} </h3>
    
      </div>
    );
  }
};

ButtonContainer.propTypes = {
  containerName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonLabels: PropTypes.any.isRequired,
};

export default ButtonContainer;