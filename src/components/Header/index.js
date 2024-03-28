import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
      </Link>
      <div className="nav-text">
        <Link to="/">
          <p className="text">Home</p>
        </Link>

        <Link to="/jobs">
          <p>Jobs</p>
        </Link>
      </div>
      <button onClick={logoutClicked} type="button">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
