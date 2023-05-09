class Movie{
    constructor(title, actress){
        this.title = title;
        this.actress = actress; 


    }
    describe(){
        return `The movie ${this.title} had actress ${this.actress} in it.`;

    }
}
class List {
    constructor(){
        this.movies = [];
    }  
    addMovies(movie){
        this.movies.push(movie);
    }
       displayMovies(){

        let movieInfo = "";
        for (let i = 0; i < this.movies.length; i++){
            movieInfo += `${this.movies[i].title}, that had actress ${this.movies[i].actress}\n`;
        }
        return movieInfo;
    }
}

let movie1 = new Movie("Fools Rush In", "Selma Hayek");
let movie2 = new Movie("The Cutting Edge", "Moira Kelly");
let movie3 = new Movie("Marry Me", "Jennifer Lopez"); 

console.log(movie1.describe());
console.log(movie2.describe());
// if was going to delete a movie, it would be movie3 - console.log(movie3.describe()); this is the command//
//I wouldve used//

let list = new List;
list.addMovies(movie1);
list.addMovies(movie2);


console.log(list.displayMovies());
console.log('These are my two favorite movies of all time, and both these actresses are my favorites! ')