import { Link } from "react-router-dom"
// import {getGames} from '../../store/games'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import fs from 'fs'

function SearchQuestions({user, gamesLoaded, genres, categories}){

    
    const [filteredGames, setFilteredGames] = useState([])
    const [multiplayer, setMultipler] = useState(false)
    const [singleplayer, setSingleplayer] = useState(false)
    const [coop, setCoop] = useState(false)
    const [firstCat, setFirstCat] = useState(false)


    const categoryCheck = (id) => {
        if(+id === 1){
            if(multiplayer){
                setMultipler(false)
            }else{
                setMultipler(true)
            }
        }
        if(+id === 2){
            if(singleplayer){
                setSingleplayer(false)
            }else{
                setSingleplayer(true)
            }
        }
        if(+id === 9){
            if(coop){
                setCoop(false)
            }else{
                setCoop(true)
            }
        }
    }


    return(
        <>
        {gamesLoaded  ?
            <>
                {!firstCat ? 
                    
                    <div className='searchQuestions'>
                        <h2>Which type of game are you looking for?</h2>
                        <h4>You can pick multiple.</h4>
                        <div className='checkboxDiv'>
                            <input type="checkbox" value={1} name="multiplayer" onClick={e => categoryCheck(e.target.value)}/>
                            <label htmlFor="multiplayer">Multiplayer</label>
                            <input type="checkbox" value={2} name="singleplayer" onClick={e => categoryCheck(e.target.value)}/>
                            <label htmlFor="singleplayer">Singleplayer</label>
                            <input type="checkbox" value={9} name="coop" onClick={e => categoryCheck(e.target.value)}/>
                            <label htmlFor="coop">Co-op</label>
                            <button onClick={() => setFirstCat(true)}>Next</button>
                        </div>
                    </div>

                                  
                :
                
                <>
                
                
                
                </>
            }
            </>
        : 
            <>
                <div className='loadingScreen'>
                    <h1>Please wait a moment while the data loads.</h1>
                    <img src='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'/>
                    <h4>This may take some time.</h4>
                </div>
            
            </>
        
        }
        </>
    )

}


export default SearchQuestions