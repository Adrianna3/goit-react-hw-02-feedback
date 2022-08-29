import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <div>
         <button
        type="button"
        onClick={onLeaveFeedback}
      >
        {options}
      </button>
    </div>
  );
};
    
   

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};