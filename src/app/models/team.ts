export interface Team {
    id: number;
    name: string;
    image: string;
    civilite: string;
}

export interface Details {
    annee: string;
    niveaux: Niveau[];
    entrainement: Entrainement[];
    entraineurs: Entraineur[];
    players: Player[]

}

export interface Niveau {
    equipe: string;
    niveau: string;
}

export interface Entrainement {
    jour: string;
    horaire: string;
    equipe: string;
}

export interface Entraineur {
    nom: string;
    prenom:string;
    equipe: string;
    telephone: string;
    photo: string;
}

export interface Player {
    nom: string;
    prenom: string;
    poste :string;
    photo : string
}

