import {
    GET_COINS_MARKETS,
    GET_COIN,
    SET_COINS_LOADING,
    SET_COIN_LOADING
} from "../types"

const initialState = {
    coinsMarkets: {},
    currentCoin: null,
    coinsLoading: true,
    coinLoading: true
}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COINS_MARKETS:
            return {
                ...state,
                coinsMarkets: action.payload,
                coinsLoading: false
            };

        case GET_COIN:
            return {
                ...state,
                currentCoin: action.payload,
                coinLoading: false
            };

        case SET_COINS_LOADING:
            return {
                ...state,
                coinsLoading: true
            };

        case SET_COIN_LOADING:
            return {
                ...state,
                coinLoading: true
            };

        default:
            return state;
    }
};

export default coinReducer;