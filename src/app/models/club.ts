import { Content } from "./content";

export interface Club {
    history: ClubHistory;
    numbers: Numbers;
    location: Location;
}

export interface ClubHistory {
    title: string;
    content: Content;    
}

export interface Numbers {

}

export interface Location {
    
}