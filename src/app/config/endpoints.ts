import { environment } from "src/environments/environment";

const URL_BASE = environment.urlBase;

export class Endpoint {
    constructor(public baseUrl: string, public path: string){}
}

export const ENDPOINTS = {
    login: new Endpoint(URL_BASE, "auth/login"),
    register: new Endpoint(URL_BASE, "auth/register"),

    getAllRooms: new Endpoint(URL_BASE, "room/get-all-rooms"),
    getRoomDetail: new Endpoint(URL_BASE, "room/get-room-detail/{roomCode}"),
    addRoom: new Endpoint(URL_BASE, "room/add-room"),
    reserveRoom: new Endpoint(URL_BASE, "room/reserve"),

    uploadImages: new Endpoint(URL_BASE, "room/add-images-room"),

    getAllUsersFromAdmin:new Endpoint(URL_BASE,"user/get-all-users-from-admin"),
    getAllUsersFromSuperadmin:new Endpoint(URL_BASE,"user/get-all-users-from-superadmin"),

    loadImagesFromRoom: new Endpoint(URL_BASE, "room/get-all-images/files/{roomCode}"),

    canAddComment: new Endpoint(URL_BASE, "room/can-add-comment/{userId}/{roomCode}"),
    addComment: new Endpoint(URL_BASE, "room/add-room-comment"),
    getAllCommentsRoom: new Endpoint(URL_BASE, "room/get-room-comments/{roomCode}"),
    deleteRoomComment: new Endpoint(URL_BASE, "room/delete-room-comment")

}