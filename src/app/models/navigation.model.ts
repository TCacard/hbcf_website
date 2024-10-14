// src/app/models/navigation.model.ts

export interface SubTitle {
    title: string;
    route?: string;
    subTitles?: SubTitle[]; // Optionnel pour les sous-titres imbriqués
  }
  
  export interface NavItem {
    title: string;
    route?: string;
    subTitles?: SubTitle[]; // Optionnel pour les sous-titres
  }
  
  export interface Navigation {
    nav: NavItem[];
  }
  