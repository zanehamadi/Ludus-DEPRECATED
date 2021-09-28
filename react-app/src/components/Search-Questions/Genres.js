import {searchRequest} from '../../store/games'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"

function Genres({filters, setFilters, setCheckGenres, genres, setResults, setResultsLoaded}){

    const dispatch = useDispatch()
    const [validation, setValidation] = useState(false)
    const genreTrack = new Set()
    const genreTrackFunc = (id) => {

        if(genreTrack.has(+id)) genreTrack.delete(+id)
        else{
            genreTrack.add(+id)
        }
    }

    const genreSubmit = async () => {

        const copyFilters = filters
        const genreTrackArr = Array.from(genreTrack)


        if(genreTrackArr.length < 2) setValidation(true)
        else{
            genreTrackArr.forEach(id => {
                copyFilters.genre.push(id)
            })
            setFilters(copyFilters)
            setCheckGenres(true)
            let resResults = await dispatch(searchRequest(filters))
            setResultsLoaded(true)
            // console.log('RES RESULTS', resResults)
            // const foundResults = Object.values(resResults)
            // setResults(foundResults)
            setResultsLoaded(true)
        }

    }


    return(
        <div className="genreSelection">
            {console.log(filters)}
            <h2 className="searchText">Genres</h2>
            <h4 className="searchText">Please pick a minimum of two</h4>
            {validation && <h4>Please enter atleast two genres.</h4>}

            {genres.map(genre => 

                <div className="genreQuestion" key={genre.id}>
                            <input type="checkbox" name={genre.name} value={genre.id} onClick={e => genreTrackFunc(e.target.value)} className="checkBoxStyling"/>
                            <label htmlFor={genre.name}>{genre.name}</label>
                </div>

            )}
            <button className="startOverButton" onClick={genreSubmit}>
                View Results
                <i className="fas fa-caret-right rightArr"></i>
            </button>
        </div>
    )
}

export default Genres


