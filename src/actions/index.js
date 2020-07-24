export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE';

export function addMovies (movies){
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}


export function addFavourite (movies){
    return {
        type: ADD_FAVOURITE,
        movies: movies
    }
}

export function removeFavourite (movies){
    return {
        type: REMOVE_FAVOURITE,
        movies: movies
    }
}

export function setShowFavourites (val){
    return {
        type: SET_SHOW_FAVOURITE,
        val: val
    }
}