import React, { useState } from 'react';
import Lists from './Lists';

function User({user}) {


  return (

    <>
        {user.id ? 

          <div className="profileContainer">
                <h1 id="userProfileHeader">{`${user.username}'s Profile`}</h1>
                  <h2 id="gameListHeader">Games List</h2>
                <div>
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
