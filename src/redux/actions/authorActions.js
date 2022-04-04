import * as authorApi from "../../api/authorApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return authorApi
            .getAuthors()
            .then(authors => {
                dispatch(loadAuthorSuccess(authors));
            })
            .catch(error => {
                dispatch(apiCallError());
                throw error;
            });
    };
}
