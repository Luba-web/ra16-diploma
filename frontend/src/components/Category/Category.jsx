import { Link } from 'react-router-dom';

export function Category({ id, active, title, handleCategoryClick }) {
  return (
    <li className="nav-item" key={id}>
      <Link
        type="button"
        className={active === id ? 'nav-link active' : 'nav-link'}
        onClick={() => handleCategoryClick(id)}
      >
        {title}
      </Link>
    </li>
  );
}
