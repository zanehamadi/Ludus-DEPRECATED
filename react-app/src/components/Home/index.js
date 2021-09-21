import { Link } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton'


function Home({user}){
    return(

        <>
            {user ? 
                
                <div>
                    <h1>{`Welcome Back, ${user?.username}`}</h1>
                    <LogoutButton/>
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
                    <h3>Test</h3>

                </div>
        
            }
        </>
    )
}


export default Home