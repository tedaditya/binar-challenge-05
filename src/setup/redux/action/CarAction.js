import axios from "axios";
import {GET_ALL_CAR, GET_CAR_BY_ID} from "../type/CarType";

export const getAllCar = () => async (dispatch) => {
    try {
        dispatch({type: `${GET_ALL_CAR}_LOADING`});

        await axios.get(`https://rent-cars-api.herokuapp.com/admin/car`)
            .then((res) => {
                dispatch({
                    type: `${GET_ALL_CAR}_FULFILLED`,
                    payload: res.data,
                })
            })
    } catch (err) {
        dispatch({
            type: `${GET_ALL_CAR}_ERROR`,
            error: err.message,
        });
    }
}

export const getCarById = (id) => async (dispatch) => {
    try {
        dispatch({type: `${GET_CAR_BY_ID}_LOADING`});

        await axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
            .then((res) => {
                dispatch({
                    type: `${GET_CAR_BY_ID}_FULFILLED`,
                    payload: res.data,
                })
            })
    } catch (err) {
        dispatch({
            type: `${GET_CAR_BY_ID}_ERROR`,
            error: err.message,
        });
    }
}