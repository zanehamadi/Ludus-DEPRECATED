import { NavLink } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton'
import DemoButton from "../auth/DemoButton"
import './nav.css'

function NavBar({user}){

    return(
        <div className="nav">
            {user ?
                <>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/search-questions'>SEARCH</NavLink>
                    <NavLink to={`/users/${user.id}`}>PROFILE</NavLink>
                    <LogoutButton/>
                </>
            :
                <>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/search-questions'>SEARCH</NavLink>
                    <NavLink to='/login'>LOGIN</NavLink>
                    <NavLink to='/sign-up'>SIGNUP</NavLink>
                    <DemoButton/>
                </>
            }
        </div>
    )
}

export default NavBar