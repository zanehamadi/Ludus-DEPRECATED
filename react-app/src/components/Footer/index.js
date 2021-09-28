import { Link } from 'react-router-dom'
import './footer.css'


function Footer(){

    return(
        <footer className="footer">
            <a href="https://github.com/zanehamadi" >
                <i className="fab fa-github fa-5x navIcons"></i>
            </a>

            <a href="https://www.linkedin.com/in/zane-el-abedean-hamadi-a47b1a215/">
                <i className="fab fa-linkedin-in fa-5x navIcons"></i>
            </a>

            <a href="https://steamcommunity.com/dev">
                <i className="fab fa-steam fa-5x navIcons"></i>
            </a>
            <Link className="navIcons" id="aboutUs">About Us</Link>
        </footer>
    )
}

export default Footer