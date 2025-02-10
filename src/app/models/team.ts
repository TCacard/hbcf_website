export interface Team {
    _id: number;
    name: string;
    picture: string;
    civility: string;
    details: Details;
}

export interface Details {
    year: string;
    levels: Level[];
    trainings: Training[];
    trainers: Trainer[];
    players: Player[]

}

export interface Level {
    team_name: string;
    level_name: string;
}

export interface Training {
    day: string;
    schedule: string;
    team_name: string;
}

export interface Trainer {
    name: string;
    surname:string;
    team: string;
    phone: string;
    picture: string;
}

export interface Player {
    name: string;
    surname: string;
    // position :string;
    picture : string
}

