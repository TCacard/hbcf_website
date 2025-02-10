import { ContentItem } from "./content";
import { Picture } from "./images";

export interface AccueilPage {
    _id: string;
    primaryTitle: string;
    secondaryTitle: string;
    infos: Info[];
    pictures: Picture[];
}

export interface Info {
    _id: string;
    title: string;
    content: ContentItem[];
    button_link: string;
    picture: Picture;
}