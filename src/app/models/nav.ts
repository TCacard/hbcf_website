export interface Nav {
    _id:string;
    navItems: NavItem[]
}

export interface NavItem {
    _id: string;
    title: string;
    route?: string;
    picture?: string;
    icon?: string;
    link?: string;
    subTitles?: NavItem[];
}