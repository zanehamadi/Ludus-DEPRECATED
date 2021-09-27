// import rfdc from 'rfdc'
// const clone = rfdc()

const LOAD_GAMES = 'games/LOAD_GAMES'
const GET_RESULTS = 'games/GET_RESULTS'

const loadGames = (games) => ({
    type: LOAD_GAMES,
    games
});

const getResults = (filters) => ({
    type: GET_RESULTS,
    filters
})


export const getGames = () => async (dispatch) => {
    const res = await fetch('/api/games/');
    if (res.ok) {
        const games = await res.json();
        dispatch((loadGames(games)))
    }
};

export const searchRequest = (data) => async (dispatch) => {
    const res = await fetch('/api/games/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });


    if (res.ok) {
        
        const games = await res.json();
        await dispatch(getResults(games))
    }
}


export const getGame = () => (gameId) => async (dispatch) => {
    const res = await fetch(`/api/games/${gameId}`);
    if (res.ok){
        const game = await res.json();
        dispatch((loadGames(game)))
    }
}




const initialState = {}
// let stateCopy = clone(state)

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAMES : {
            return { ...action.games }
        }
        case GET_RESULTS: {
            return{...action.filters}
        }
        default:
            return state
            
    }
}

export default gameReducer



