export type Props = {
    showLoader: () => void,
    getMoviesList: () => void,
    loaderFlag: boolean,
    movies: string[],
    moviesByGenres: any
}

export type MapStateToProps = {
    moviesReduce: {
        loaderFlag: boolean,
        movies: string[],
        moviesByGenres: any
    }
}