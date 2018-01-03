import * as React from 'react';

export class MovieModel {
    rating: Rating;
    type: Array<string>;
    title: string;
    actors: Array<Actor>;
    durations: number;
    director: Director;
    image: string;
    pubDate: string;
}


export class Rating {
    constructor(max: number, average: number, min: number) {
        this.max = max;
        this.average = average;
        this.min = min;
    }
    max: number;
    average: number;
    min: number;
}

export class Actor {
    constructor(name: string, website: string, avatars: string) {
        this.name = name;
        this.website = website;
        this.avatars = avatars;
    }
    name: string;
    website: string;
    avatars: string;
}

export class Director {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
}