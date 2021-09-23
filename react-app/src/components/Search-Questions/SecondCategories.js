

function SecondCategories({filters, setFilters, secondCat, setSecondCat, categories}){

    
    const catTrack = new Set()
    const catTrackFunc = (id) => {

        if(catTrack.has(id)) catTrack.remove(id)
        else{
            catTrack.add(id)
        }
    }

    const secondCatSubmit = () => {

        const copyFilters = filters
        const secondCats = Array.from(catTrack)

        secondCats.forEach(cat => {
            copyFilters.category.push(+cat)
        })

        setFilters(copyFilters)
        setSecondCat(true)
    }




    return(
        <div className="searchQuestions secondCat">
            
            <h1>
                More Categories
            </h1>
            <div className="skipButton" onClick={() => setSecondCat(true)}>This section is optional, you can click here if you would like to skip.</div>

            {categories.map(category => 
                    <div className="categoryQuestion" key={category.id}>
                        <input type="checkbox" name={category.name} value={category.id} onClick={e => catTrackFunc(e.target.value)}/>
                        <label htmlFor={category.name}>{category.name}</label>
                    </div>
            )}

            <button onClick={secondCatSubmit}>Next</button>

        </div>
    )


}

export default SecondCategories