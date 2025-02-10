import { Content } from "./content";


export interface ClubEvent {
    _id: number;
    name: string;
    picture: string;
    details: Details;
}

export interface Details {
    catchphrase: string;
    content: Content;
}


