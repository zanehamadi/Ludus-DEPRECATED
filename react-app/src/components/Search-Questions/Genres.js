
function Genres({filters, setFilters, checkGenres, setCheckGenres, genres}){



    const genreTrack = new Set()
    const genreTrackFunc = (id) => {

        if(genreTrack.has(id)) genreTrack.remove(id)
        else{
            genreTrack.add(id)
        }
    }


    return(
        <div className="genreSelection">
            <h1>Genres</h1>
            <h3>Please pick a minimum of two</h3>

            {genres.map(genre => 

                <div className="genreQuestion" key={genre.id}>
                            <input type="checkbox" name={genre.name} value={genre.id} onClick={e => genreTrackFunc(e.target.value)}/>
                            <label htmlFor={genre.name}>{genre.name}</label>
                </div>

            )}
        </div>
    )
}

export default Genres


