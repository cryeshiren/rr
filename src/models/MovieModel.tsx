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
    max: number;
    average: number;
    min: number;
    constructor(max: number, average: number, min: number) {
        this.max = max;
        this.average = average;
        this.min = min;
    }
}

export class Actor {
    name: string;
    website: string;
    avatars: string;
    constructor(name: string, website: string, avatars: string) {
        this.name = name;
        this.website = website;
        this.avatars = avatars;
    }
}

export class Director {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}