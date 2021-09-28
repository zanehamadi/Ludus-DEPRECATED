import { NavLink } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton'
import DemoButton from "../auth/DemoButton"
import './nav.css'

function NavBar({user}){

    return(
        <div className="nav">
            {user ?
                <>
                    <div><NavLink to='/'>HOME</NavLink></div>
                    <div><NavLink to='/search-questions'>SEARCH</NavLink></div>
                    <div><NavLink to={`/users/${user.id}`}>PROFILE</NavLink></div>
                    <div><LogoutButton/></div>
                </>
            :
                <>
                    <div><NavLink to='/'>HOME</NavLink></div>
                    <div><NavLink to='/search-questions'>SEARCH</NavLink></div>
                    <div><NavLink to='/login'>LOGIN</NavLink></div>
                    <div><NavLink to='/sign-up'>SIGNUP</NavLink></div>
                    <div><DemoButton/></div>
                </>
            }
        </div>
    )
}

export default NavBar