export interface Price {
    eur: number;
    usd: number;
    gbp: number;
    sek: number;
}

export interface Package {
    name: string;
    features: Feature[];
    recommended_players: number;
    ram: number;
    disk: number;
    slots: number;
    price: Price;
}

export interface Game {
    slug: string;
    name: string;
    description: string;
    background ?: string;
    hero_slider_img ?: string;
    type ?: string;
    new ?: number;
    fragify: String;
    ranked ?: number;
    youtube_id ?: string;
    packages: Package[];
}

export interface Location {
    country: string;
    city: string;
    short_code: string;
    longitude: string;
    latitude: string;
    ping_site: string;
    public: string;
    ddos_protection: string;
}

export interface Feature {
    id: number;
    name: string;
    icon: string;
}

export interface Review {
    author: string;
    content: string;
    rating: number;
    game: string;
}

export interface news {
    
}