import { Link } from "react-router-dom"
import './home.css'


function Home({user}){
    return(

        <>
            {user ? 
                
                <div className="homePage">
                    <h1>{`Welcome Back, ${user?.username}`}</h1>
                    <Link to="/search-questions">Begin Search</Link>
                </div> 
            :
            
                <div>
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
        </>
    )
}


export default Home