import './ProgressBar.style.scss';

const ProgressBar = () => (
  <div className="progress">
    <div className="circular">
      <div className="inner" />
      <div className="number">50%</div>
      <div className="circle">
        <div className="bar left">
          <div className="progress" />
        </div>
        <div className="bar right">
          <div className="progress" />
        </div>
      </div>
    </div>
  </div>
);

export default ProgressBar;
