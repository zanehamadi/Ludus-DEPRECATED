import { Link } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton'
import DemoButton from "../auth/DemoButton"
import './nav.css'

function NavBar({user}){

    return(
        <div className="nav">
            {user ?
                <span>
                    <Link to='/'>Home</Link>
                    <Link to='/search-questions'>Search</Link>
                    <Link to={`/users/${user.id}`}>Profile</Link>
                    <LogoutButton/>
                </span>
            :
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/search-questions'>Search</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/sign-up'>Signup</Link>
                    <DemoButton/>
                </div>
            }
        </div>
    )
}

export default NavBar