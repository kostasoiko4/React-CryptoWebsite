import axios from "axios";
import {
    GET_COINS_MARKETS,
    GET_COIN,
    SET_COINS_LOADING,
    SET_COIN_LOADING
} from "../types"


// get coins market price
export const getCoinsMarkets = (page) => async (dispatch) => {
    dispatch({
        type: SET_COINS_LOADING,
        payload: true
    })

    await axios.get(`v1/coins`, {params: {page}})
        .then(function (response) {
            console.log("cmon",response) // for debug only
            dispatch({
                type: GET_COINS_MARKETS,
                payload: response.data,
            });
        })
        .catch(function (error) {
            console.log(error)
        });
}

// get one coin
export const getCoin = (coin_id) => async (dispatch) => {
    dispatch({
        type: SET_COIN_LOADING,
        payload: true
    })

    await axios.get('v1/coin', {params: {coin_id}})
        .then(function (response) {
            console.log(response) // for debug only
            dispatch({
                type: GET_COIN,
                payload: response.data,
            });
        })
        .catch(function (error) {
            console.log(error)
        });
}
