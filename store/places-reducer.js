import { ADD_PLACE } from "./places-action";
import Places from '../models/places';

const initialState = {
    places: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Places(new Date().toString(), action.placeData.title);
            return {
                places: state.places.concat(newPlace)
            }
        default:
            return state
    }
    return state;
}