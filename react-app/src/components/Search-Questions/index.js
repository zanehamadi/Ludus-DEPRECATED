import { Link } from "react-router-dom"
import {getGames} from '../../store/games'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function SearchQuestions({user, gamesLoaded}){

    

    const gamesSlice = useSelector(state => state.games)
    const games = Object.values(gamesSlice)

    return(
        <>
        {gamesLoaded ? 
            <>
                <div className='searchQuestions'>
                    <h2>Which of these categories are you looking for?</h2>
                    <h4>You can pick multiple.</h4>
                </div>
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