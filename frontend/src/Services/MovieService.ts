import axios from "axios";
import {UserProfileInfo} from "../Models/User";
import {handleError} from "../Helper/ErrorHandler";
import {CreateMovieDto} from "../Models/MovieDto";

export const movieAddNew = async (name: string, description: string, trailerLink: string, posterLink: string,) => {
    try {
        return await axios.post<CreateMovieDto>("movie", {
            name: name,
            description: description,
            trailerLink: trailerLink,
            posterLink: posterLink,
        })
    } catch (error) {
        handleError(error)
    }
}

export const uploadMovie = async (file: File, id: number, onUploadProgress: any) => {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post(
        "movie/upload?movieId=" + id,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress
        }
    );
};
