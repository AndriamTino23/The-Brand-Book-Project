import './ApplyNowButton.css';

const ApplyNowButton = ({onClick, isDisabled = false}) => {
  return (
  <>
    {(!isDisabled) ? (
      <button 
        className="apply-now-btn" 
        type="submit" 
        onClick={onClick}
      >Apply Now
      </button>) : (
        <button 
          className="apply-now-btn disabled" 
          type="submit" 
          disabled
          >Apply Now
        </button>
      )
    }
  </>
  )
}

export default ApplyNowButton