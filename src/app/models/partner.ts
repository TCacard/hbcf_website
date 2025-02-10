import { ContactItem } from "./contact";
import { ContentItem } from "./content";

export interface Partner {
    _id: string;
    title: string;
    type: string;
    description?: string;
    partners_list?: PartnerItem[];
    content?: ContentItem[];
    contact?: ContactItem[];
}

export interface PartnerItem {
    _id: string;
    name: string;
    logo: string;
    link: string;
}

