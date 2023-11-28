class movie{    
    constructor (title,studio,rating = "PG"){ //Constructor for the class movie 
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    };
    
    static getpg(){ // Staic method which will filter out The movies only that have The rating as PG     
        let PGarray = [];
        for(let val of array){
            if(val.rating=="PG"){
                PGarray.push(val)
            };
        };
        
        return PGarray;
    } ;

};

let movie1 = new movie("Casino Royale","Eon Productions","PG13"); //This is the task which stated in question (d)
let movie2 = new movie("Shadows in the Fog","The Cine Pit Productions");
let movie3 = new movie("The Deathly Dance","Little Crew Productions","PG");
let movie4 = new movie("Dark Empire","Thunder Productions","R");
let movie5 = new movie("Final Orders","The Reels Productions","G");

let array = [];
array.push(movie1);
array.push(movie2);
array.push(movie3);
array.push(movie4);
array.push(movie5);

let MoviesOfPG = movie.getpg(array)

console.log(MoviesOfPG); // This will filter out the movie which has the rating as PG

console.log(movie1); // Instances of The class movie of question (d)


