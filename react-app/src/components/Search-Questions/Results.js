import { useDispatch, useSelector } from "react-redux"
import { addNewPlayed, removePlayed, addNewPlaying, removePlaying, addWantToPlay, removeWantToPlay} from '../../store/session'

function Results({resultsLoaded, user}){

    const dispatch = useDispatch()
    const gamesSlice = useSelector(state => state.games)
    let results = Object.values(gamesSlice)
    results = results[0]

    results = results?.filter(game => (!game?.name?.toUpperCase().includes('HENTAI') && !game?.description?.toUpperCase().includes('HENTAI')) && (!game?.name?.toUpperCase().includes('SEX') && !game?.description?.toUpperCase().includes('SEX')))


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
            {resultsLoaded ?

                <div className="resultContainer">
                    <h5 className="searchText">{`${results?.length} results.`}</h5>
                    {results?.map(game => 
                        <>
                                <div className="searchText specificResult">

                                    <h2>{game.name}</h2>
                                    <img src={game.image} alt={`${game.name}'s icon'`}/>
                                    <p>{game.description}</p>
                                    <h3>{game.release_date}</h3>


                                    <div>
                                        <a href={`https://store.steampowered.com/app/${game.id}/`} id="steamLink">View on the Steam Store</a>
                                    </div>
                                    

                                    {user &&
                                        <div className="userListButtonsContainer">
                                            {(!user?.played.includes(game.id) && !user?.playing.includes(game.id) && !user?.wantToPlay.includes(game.id)) &&
                                                <>
                                                    <button value={game.id} className="gameListSearchButton" onClick={e => addGameWantToPlay(e.target.value)}>Add Game to 'Want to Play'</button>
                                                    <button value={game.id} className="gameListSearchButton" onClick={e => addPlaying(e.target.value)}>Add Game to 'Playing'</button>
                                                    <button value={game.id} className="gameListSearchButton" onClick={e => addPlayed(e.target.value)}>Add Game to 'Played'</button>
                                                </>
                                            
                                            }

                                            {user?.played.includes(game.id) &&

                                                <button value={game.id} className="gameListSearchButton" onClick={e => removeGameFromPlayed(e.target.value)}>Remove Game from 'Played'</button>

                                            }
                                            {user?.playing.includes(game.id) && 

                                                <button value={game.id} className="gameListSearchButton" onClick={e => removeGameFromPlaying(e.target.value)}>Remove Game from 'Playing'</button>
                            
                                            }
                                            {user?.wantToPlay.includes(game.id) &&

                                                <button value={game.id} className="gameListSearchButton" onClick={e => removeGameFromWantToPlay(e.target.value)}>Remove Game from 'Want to Play'</button>
                                                
                                            }
                                        </div>
                                    }
                                </div>
                       </>   
                    )}
                </div>

            :
            
            <div className='loadingScreen'>
            <h1>Please wait a moment while the data loads.</h1>
            <img id="rocketGif" src='https://grandhcypher-crew.s3.us-west-1.amazonaws.com/sun-drawing-transparent.gif' alt="Loading Icon"/>
            <h4>This may take some time.</h4>
            </div>

    


            
        
            }
        </>
    )

}

export default Results