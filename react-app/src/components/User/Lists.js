import { useEffect, useState } from "react"
import { getGame} from "../../store/games"
import { useDispatch, useSelector } from "react-redux"
import { addNewPlayed, removePlayed,addNewPlaying, removePlaying, addWantToPlay, removeWantToPlay  } from "../../store/session"


function Lists({user}){
    const dispatch = useDispatch()
    const games = Object.values(useSelector(state => state.games))
    const wantToPlayGames = games.filter(game => user.wantToPlay.includes(game.id))
    const playingGames = games.filter(game => user.playing.includes(game.id))
    const playedGames = games.filter(game => user.played.includes(game.id))



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


    
    useEffect(async ()  => {
        
        for(let i = 0 ; i < user?.wantToPlay.length ; i++){
            
            let gameId = user?.wantToPlay[i]
            let game = await dispatch(getGame(gameId))
        }
        
        for(let i = 0 ; i < user?.playing.length ; i ++){
            let gameId = user?.playing[i]
            let game = await dispatch(getGame(gameId))
        }
        
        for(let i = 0 ; i < user?.played.length ; i++){
            let gameId = user?.played[i]
            let game = await dispatch(getGame(gameId))
        }
        
    },[dispatch])
    
    
    return(
        <>  
            <div>
                <h3>Want to Play</h3>
                {wantToPlayGames.map(game =>
                    <div>
                        <p>{game.name}</p>
                        <button value={game.id} onClick={(e => removeGameFromWantToPlay(e.target.value))} >Remove</button>
                    </div> 
                    
                )}
            </div>
            <div>
                <h3>Playing</h3>
                {playingGames.map(game =>
                    <p>{game.name}</p>
                )}
            </div>
            <div>
                <h3>Played</h3>
                {playedGames.map(game =>
                    <p>{game.name}</p>
                )}
            </div>
        </>
    )

}


export default Lists