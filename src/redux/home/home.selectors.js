import {createSelector} from "reselect";

const selectHome = state =>state.home

export const selectCollections = createSelector(
    [selectHome],
    home => home.collections
)