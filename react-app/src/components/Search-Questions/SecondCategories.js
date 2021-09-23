

function SecondCategories({filters, setFilters, secondCat, setSecondCat, categories}){

    const catTrack = new Set()

    const catTwoSubmit = () => {




    }




    return(
        <div className="searchQuestions secondCat">
            
            <h1>
                More Categories
            </h1>
            <div className="skipButton" onClick={() => setSecondCat(true)}>This section is optional, you can click here if you would like to skip.</div>

            {categories.map(category => 
                    <div className="categoryQuestion" key={category.id}>
                        <input type="checkbox" name={category.name} value={category.id}/>
                        <label htmlFor={category.name}>{category.name}</label>
                    </div>
            )}

        </div>
    )


}

export default SecondCategories