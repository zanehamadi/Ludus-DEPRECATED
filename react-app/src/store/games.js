// import rfdc from 'rfdc'
// const clone = rfdc()

const LOAD_GAMES = 'games/LOAD_GAMES'

const loadGames = (games) => ({
    type: LOAD_GAMES,
    games
});


export const getGames = () => async (dispatch) => {
    const res = await fetch('/api/games/');
    if (res.ok) {
        const games = await res.json();
        dispatch((loadGames(games)))
    }
};


const initialState = {}
// let stateCopy = clone(state)

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAMES : {
            return { ...action.games }
        }
        default:
            return state
    }
}

export default gameReducer



