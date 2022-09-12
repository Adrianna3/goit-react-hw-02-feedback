import PropTypes from 'prop-types';

export const FeedbackOption = ({ options, onLeaveFeedback}) => {
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
    
   

FeedbackOption.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};