import React, { useState } from 'react';
import Lists from './Lists';

function User({user}) {
  const [listButton, setListButton] = useState(true)


  return (

    <>
        {user.id ? 

          <div className="profileContainer">
                <h1>{`${user.username}'s Profile`}</h1>
                <div>
                  <h2>Games List</h2>
                  <Lists user={user}/>
                </div>


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
