import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const [listButton, setListButton] = useState(false)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const toggleList = () => {
    if(listButton) setListButton(false);
    else setListButton(true) 
  }

  console.log(user)

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
