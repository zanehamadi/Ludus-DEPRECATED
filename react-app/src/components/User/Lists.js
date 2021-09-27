import { useEffect} from "react"
import { getGame} from "../../store/games"
import { useDispatch, useSelector } from "react-redux"
import { addNewPlayed, removePlayed,addNewPlaying, removePlaying, addWantToPlay, removeWantToPlay  } from "../../store/session"


function Lists({user}){
    const dispatch = useDispatch()
    const games = Object.values(useSelector(state => state.games))
    const wantToPlayGames = games.filter(game => user.wantToPlay.includes(game.id))
    const playingGames = games.filter(game => user.playing.includes(game.id))
    const playedGames = games.filter(game => user.played.includes(game.id))
    console.log(user)

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

    const wtpToPlaying = (id) => {
        removeGameFromWantToPlay(id)
        addPlaying(id)
    }
    const playingToPlayed = (id) => {
        removeGameFromPlaying(id)
        addPlayed(id)
    }
    const playedToPlaying = (id) => {
        removeGameFromPlayed(id)
        addPlaying(id)
    }
    const playingToWTP = (id) => {
        removeGameFromPlaying(id)
        addGameWantToPlay(id)
    }


    
    useEffect(() => {
        
        for(let i = 0 ; i < user?.wantToPlay.length ; i++){
            
            let gameId = user?.wantToPlay[i]
            let game = dispatch(getGame(gameId))
        }
        
        for(let i = 0 ; i < user?.playing.length ; i ++){
            let gameId = user?.playing[i]
            let game = dispatch(getGame(gameId))
        }
        
        for(let i = 0 ; i < user?.played.length ; i++){
            let gameId = user?.played[i]
            let game = dispatch(getGame(gameId))
        }
        
    },[dispatch])
    
    

    return(
        <>  
            <div>
                <h3>Want to Play</h3>
                {wantToPlayGames.map(game =>
                        <div>
                            <p>{game.name}</p>
                            <button value={game.id} onClick={(e => removeGameFromWantToPlay(e.target.value))}>Remove</button>
                            <button value={game.id} onClick={(e => wtpToPlaying(e.target.value))}>Move to Playing</button>
                        </div> 
                )}
            </div>

            <div>
                <h3>Playing</h3>
                {playingGames.map(game =>
                    <div>
                        <p>{game.name}</p>
                        <button value={game.id} onClick={(e => removeGameFromPlaying(e.target.value))}>Remove</button>
                        <button value={game.id} onClick={(e => playingToPlayed(e.target.value))}>Move to Played</button>
                        <button value={game.id} onClick={(e => playingToWTP(e.target.value))}>Move to Want to Play</button>
                    </div>
                )}
            </div>

            <div>
                <h3>Played</h3>
                {playedGames.map(game =>
                    <div>
                        <p>{game.name}</p>
                        <button value={game.id} onClick={(e => removeGameFromPlayed(e.target.value))}>Remove</button>
                        <button value={game.id} onClick={(e => playedToPlaying(e.target.value))}>Move to Playing</button>
                    </div>
                )}
            </div>
        </>
    )

}


export default Lists