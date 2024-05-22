import exp from "node:constants";
import {MovieDto} from "./MovieDto";
import {RoomItemDto} from "./RoomItemDto";

export type UserProfileToken = {
    id: string,
    username: string,
    token: string,
}

export type UserProfileId = {
    id: string
    username: string,
}

export type UserProfileInfo = {
    pinnedMovies: MovieDto[],
    users: [],
    ownedRooms: RoomItemDto[]
}

export type CreateRoomInfo = {
    id: string,
    owner: {
        id: string,
        textroomToken: string,
        username: string
    }
}

export type JoinRoomInfo = {
    id: string,
    textroomToken: string,
    username: string
}