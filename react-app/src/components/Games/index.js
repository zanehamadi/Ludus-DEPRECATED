import { useDispatch} from 'react-redux'
import { addNewPlayed, removePlayed } from '../../store/session'



function Games({games, user}){


    const dispatch = useDispatch()
    

    
    const addPlayed = async(id) => {
        
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        
        await dispatch(addNewPlayed(payload))

    }

    const removeGameFromPlayed = async(id) => {
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        await dispatch(removePlayed(payload))
    }


    return(
        <>
            {games.length ? 
                <>
                
                    {games.map(game => 
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                            {game.is_free ? <h3>Price: Free :)</h3> : <h3>{`Price: ${(game.price / 100)}`}</h3>}
                            <h3>{game.release_date}</h3>
                            {!user.played.includes(game.id) ?
                            <>
                            <button value={game.id} onClick={e => addPlayed(e.target.value)}>Add Game to Played List</button>
                            </>:
                            <>
                            <button value={game.id} onClick={e => removeGameFromPlayed(e.target.value)}>Remove Game</button>
                            </>
                            }
                        </div>
                    )}
                </>:
                <>
                <h2>LOADING</h2>
                </>
            }
            
        </>
    )
}

export default Games