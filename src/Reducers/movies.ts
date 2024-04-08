import { Action } from "@remix-run/router";
import { Reducer } from "react";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

export interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    { id: 1, title: "Inception", popularity: 10, overview: "Description..." },
    { id: 2, title: "Ince", popularity: 8, overview: "Description..." },
    { id: 3, title: "Incn", popularity: 5, overview: "Description..." },
    { id: 4, title: "Incept", popularity: 3, overview: "Description..." },
  ],
};

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
