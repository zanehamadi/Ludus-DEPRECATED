import { Link } from "react-router-dom"

function NavBar(){

    return(
        <div className="nav">
            <span>
                <Link to='/'>Home</Link>
                <Link to='/search-questions'>Search</Link>
            </span>
        </div>
    )
}

export default NavBar