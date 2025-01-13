import { Contact, ContactItem } from "./contact";
import { Content, ContentItem } from "./content";

export interface InscriptionPage {
    _id: string;
    title: string;
    clubName: string;
    parts: InscriptionItem[]
}

export interface InscriptionItem {
    _id: string;
    title: string;
    yearTable?: YearTable;
    warning?: ContentItem[];
    content?: ContentItem[];
    logo? : string;
    contacts?: ContactItem[];
    order: number;
}


export interface YearTable {
    columns: string[];
    rows: TableRow[];
}


export interface TableRow {
    year: string;
    price: string;
}