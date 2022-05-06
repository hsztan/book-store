import './ProgressBar.style.scss';

const ProgressBar = () => (
  <div className="progress">
    <div className="circular">
      <div className="inner" />
      <div className="number" />
      <div className="circle">
        <div className="bar left">
          <div className="progress" />
        </div>
        <div className="bar right">
          <div className="progress" />
        </div>
      </div>
    </div>
    <div className="value">
      <h3>75%</h3>
      <p>Completed</p>
    </div>
  </div>
);

export default ProgressBar;
