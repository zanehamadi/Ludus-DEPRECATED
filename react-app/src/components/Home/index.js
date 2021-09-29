import { Link } from "react-router-dom"
import './home.css'


function Home({user}){
    return(

        <div className="homeSplashContainer">
            {user ? 
                
                <div className="homePage">
                    <h2 id="welcomeMessage">{`Welcome Back, ${user?.username}`}</h2>
                    <div className="beginSearchContainer"><Link to="/search-questions" className="beginSearchButton">Begin Search</Link></div>
                </div> 
            :
            
                <div className="splashPage">
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                    <div>
                        <Link to='/signup'>Signup</Link>
                    </div>
                    <div>
                        <Link to="/search-questions">Begin Search</Link>
                    </div>

                </div>
        
            }
        </div>
    )
}


export default Home