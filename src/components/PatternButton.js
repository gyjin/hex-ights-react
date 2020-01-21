import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PatternButton = (props) => {
  
  const changePattern = () => {
    axios.patch(`https://hex-ights.firebaseio.com/.json?auth=` + process.env.REACT_APP_FB_AUTH_KEY, {"pattern": props.pattern})
      .then((response) => {
          console.log(`successfully changed pattern to ` + props.pattern)
      })
      .catch((error) => {
          console.log(`pattern was not successfully changed to ` + props.pattern)
      });
  }

  return (
    <button type="button" class="btn btn-primary" onClick={changePattern}>{props.pattern}</button>
  );
};

PatternButton.propTypes = {
  pattern: PropTypes.string.isRequired,
};

export default PatternButton;