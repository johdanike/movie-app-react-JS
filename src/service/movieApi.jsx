import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_APIKEY

export const MovieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: `${BASEURL}` }),
    endpoints: (builder)=> ({
        getPopularMovies: builder.query({   //
            query: () => (`${BASEURL}/movie/popular?api_keys=${APIKEY}`)
        })
    })
})
// `use${GetPopularMovies}`

export const {useGetPopularMoviesQuery} = movieApi