import { Link } from "react-router-dom"


function Home({user}){
    return(

        <>
            {user ? 
                
                <div>
                    <h1>{`Welcome Back, ${user?.username}`}</h1>
                    <Link to="/search-questions">Begin Search</Link>
                </div> 
            :
            
                <div>
                    <h1>LUDUS</h1>
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