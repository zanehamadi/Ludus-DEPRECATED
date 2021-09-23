import { Link } from "react-router-dom"
// import {getGames} from '../../store/games'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FirstCategories from "./FirstCategories";
import SecondCategories from "./SecondCategories";

function SearchQuestions({user, gamesLoaded, genres, categories}){

    categories = categories.filter(category => {
        if(+category.id === 1 || +category.id === 2 || +category.id === 9) return false
        else{
            return true
        }
    })
    
    const [filters, setFilters] = useState({
        'category':[],
        'genre':[]})

    const [firstCat, setFirstCat] = useState(false)
    const [secondCat, setSecondCat] = useState(false)

    const restartFunc = () => {
        setFirstCat(false)
        setSecondCat(false)
    }

    
    return(
        <>
        <button onClick={restartFunc}>Start Over</button>
        {gamesLoaded  ?
            <>
                {!firstCat ? 

                    <FirstCategories filters={filters} setFilters={setFilters} firstCat={firstCat} setFirstCat={setFirstCat}/>
                :
                    <>
                        {!secondCat ? 
                            <SecondCategories filters={filters} setFilters={setFilters} secondCat={secondCat} setSecondCat={setSecondCat} categories={categories}/>
                        :
                            <h1>THIS IS FOR GENRE </h1>
                        }
                    </>
                }
            </>
        : 
            <div className='loadingScreen'>
                <h1>Please wait a moment while the data loads.</h1>
                <img src='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'/>
                <h4>This may take some time.</h4>
            </div>
        
        }
        </>
    )
}


export default SearchQuestions