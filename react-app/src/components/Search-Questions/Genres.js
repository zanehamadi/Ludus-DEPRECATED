
import { useState } from "react"

function Genres({filters, setFilters, setCheckGenres, genres}){


    const [validation, setValidation] = useState(false)
    const genreTrack = new Set()
    const genreTrackFunc = (id) => {

        if(genreTrack.has(+id)) genreTrack.delete(+id)
        else{
            genreTrack.add(+id)
        }
    }

    const genreSubmit = () => {

        const copyFilters = filters
        const genreTrackArr = Array.from(genreTrack)

        if(genreTrackArr.length < 2) setValidation(true)
        else{
            genreTrackArr.forEach(id => {
                copyFilters.genre.push(id)
            })
            setFilters(copyFilters)
            setCheckGenres(true)
        }

    }


    return(
        <div className="genreSelection">
            {console.log(filters)}
            <h1>Genres</h1>
            <h3>Please pick a minimum of two</h3>
            {validation && <h4>Please enter atleast two genres.</h4>}

            {genres.map(genre => 

                <div className="genreQuestion" key={genre.id}>
                            <input type="checkbox" name={genre.name} value={genre.id} onClick={e => genreTrackFunc(e.target.value)}/>
                            <label htmlFor={genre.name}>{genre.name}</label>
                </div>

            )}
            <button onClick={genreSubmit}>View Results</button>
        </div>
    )
}

export default Genres


