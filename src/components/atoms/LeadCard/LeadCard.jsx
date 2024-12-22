import './LeadCard.scss';

const LeadCard = ({ type, source, leadIn, vehicle, status, active }) => (
  <div className="lead-card">
    <div className="lead-header">
      <span className="lead-type">{type}</span>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
    <div className="lead-info">
      <div className="info-item">
        <span className="label">Source</span>
        <span className="value">{source}</span>
      </div>
      <div className="info-item">
        <span className="label">Lead In</span>
        <span className="value">{leadIn}</span>
      </div>
      <div className="info-item">
        <span className="label">Vehicle</span>
        <span className="value">{vehicle}</span>
      </div>
    </div>
  </div>
);

export default LeadCard;