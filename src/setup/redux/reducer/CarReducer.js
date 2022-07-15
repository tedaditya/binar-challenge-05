import {GET_ALL_CAR, GET_CAR_BY_ID} from "../type/CarType";

const initialState = {
    data: [],
    dataSelection: [],
    carSpecs: {
        capacity: 4,
        transmission: "Manual",
        productionYear: 2020
    },
    isLoading: true,
    error: null,
};

const CarReducer = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case`${GET_ALL_CAR}_LOADING`:
            return {
                ...state,
            };
        case`${GET_ALL_CAR}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                data: payload
            };
        case`${GET_ALL_CAR}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
        case`${GET_CAR_BY_ID}_LOADING`:
            return {
                ...state,
            };
        case`${GET_CAR_BY_ID}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                dataSelection: payload
            };
        case`${GET_CAR_BY_ID}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
        default:
            return {
                ...state,
            };
    }
}

export default CarReducer