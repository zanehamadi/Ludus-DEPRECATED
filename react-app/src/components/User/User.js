import React, { useState } from 'react';
import Lists from './Lists';

function User({user}) {
  const [listButton, setListButton] = useState(false)
  const toggleList = () => {
    if(listButton) setListButton(false);
    else setListButton(true) 
  }


  return (

    <>
        {user.id ? 

          <div>
                <h1>{`${user.username}'s Profile`}</h1>
                <div>
                  <button onClick={toggleList}>Your Lists</button>
                </div> 
                {listButton && 
                  <div>
                    <h2>Games List</h2>
                    <Lists user={user}/>
                  </div>
                }

          </div>
          
        :
          <div>
            User not found.
          </div>



        }
    
    </>

  );
}
export default User;
