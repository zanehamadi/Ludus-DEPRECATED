import { useDispatch} from 'react-redux'
import { addNewPlayed, removePlayed, addNewPlaying, removePlaying, addWantToPlay, removeWantToPlay} from '../../store/session'
import { Link } from 'react-router-dom'



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


        
    const addPlaying = async(id) => {
        
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        
        await dispatch(addNewPlaying(payload))

    }

    const removeGameFromPlaying = async(id) => {
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        await dispatch(removePlaying(payload))
    }



    const addGameWantToPlay = async(id) => {
        
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        
        await dispatch(addWantToPlay(payload))

    }

    const removeGameFromWantToPlay = async(id) => {
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        await dispatch(removeWantToPlay(payload))
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
                            <div>
                                <a href={`https://store.steampowered.com/app/${game.id}/`}>View on the Steam Store</a>
                            </div>
                            


                            {!user?.played.includes(game.id) ?
                                <>
                                    <button value={game.id} onClick={e => addPlayed(e.target.value)}>Add Game to 'Played'</button>
                                </>
                            :


                                <>
                                    <button value={game.id} onClick={e => removeGameFromPlayed(e.target.value)}>Remove Game from 'Played'</button>
                                </>
                            }


                            {!user?.playing.includes(game.id) ?

                                <>
                                    <button value={game.id} onClick={e => addPlaying(e.target.value)}>Add Game to 'Playing'</button>
                                </>
                            :

                                <>
                                    <button value={game.id} onClick={e => removeGameFromPlaying(e.target.value)}>Remove Game from 'Playing'</button>
                                </>
                                
                            }


                            {!user?.wantToPlay.includes(game.id) ? 
                                <>
                                    <button value={game.id} onClick={e => addGameWantToPlay(e.target.value)}>Add Game to 'Want to Play'</button>
                                </> 
                            : 
                                <>
                                    <button value={game.id} onClick={e => removeGameFromWantToPlay(e.target.value)}>Remove Game from 'Want to Play'</button>
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