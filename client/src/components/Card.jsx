import { Link } from "react-router-dom";

// re-useable card component (abstracted from Paint/UserCards)

const Card = ({
  title,
  subtitle,
  id,
  editPath,
  deletePath,
  showActions = true,
  style,
}) => (
  <div className="info-card" style={style}>
    <div className="info-details">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
    {showActions && (
      <div className="info-actions">
        <button>
          <Link to={editPath} className="btn-link">
            Edit
          </Link>
        </button>
        <button>
          <Link to={deletePath} className="btn-link">
            Delete
          </Link>
        </button>
      </div>
    )}
  </div>
);

export default Card;
