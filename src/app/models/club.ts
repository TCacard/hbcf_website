import { Content } from "./content";

export interface Club {
    history?: ClubHistory;
    numbers?: ClubNumbers;
    location?: ClubLocation;
}

export interface ClubHistory {
    _id: string;
    title: string;
    type: string;
    content: Content;    
}

export interface ClubNumbers {
    _id: string;
    title: string;
    type: string;
    numbers: ClubNumber[];
}

export interface ClubLocation {
    _id: string;
    title: string;
    type: string;
    parts: ClubLocationPart[];
}

export interface ClubNumber {
    _id: string;
    data: string;
    description: string;
}

export interface ClubLocationPart {
    title: string;
    entries?: ClubLocationEntry[];
    location?: string;
}

export interface ClubLocationEntry {
    name: string;
    text: string;
}

