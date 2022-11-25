import styles from './Return.module.css';
import { useNavigate } from 'react-router-dom';

function Return() {

  const history = useNavigate();

  return (
    <div>
      <nav className={`${styles.navbar} ${"navbar w-100"}`}>
        <div className="container-fluid px-4" onClick={() => history(-1)}>
          <i className="bi bi-chevron-left text-white fs-1"></i>
        </div>
      </nav>
    </div>
  )
}

export default Return