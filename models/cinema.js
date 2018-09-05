const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitle = function(){
 const results = this.films.map((film) => {
  return film.title;
  })
return results;
}

Cinema.prototype.findFilm = function(filmTitle){
  return foundFilm = this.films.find(film => film.title === filmTitle); 
}

Cinema.prototype.filterByGenre = function(genre){
  return foundGenre = this.films.filter(film => film.genre === genre)
}

Cinema.prototype.filmByYearQ = function(year){  
  // console.log(this.films[0].year.includes(2017));
  const filmsByYearArray = this.films.filter(film => film.year == year)
  return ( filmsByYearArray.length > 0 ? true : false)
  // if (filmsByYearArray.length > 0){
  //   return true
  // } else {
  //   return false;
  // }
}

Cinema.prototype.filmsAllOverLength = function(time){
  const numOfFilmsToTest = this.films.length;
  const filmsByLength = this.films.filter(film => film.length > time)
  return ( numOfFilmsToTest === filmsByLength.length ? true : false )
}

Cinema.prototype.totalRunningTime = function(){
  const totalTime = this.films.reduce((runningTotal,film) => {
  return runningTotal+film.length;
  },0);
 
  return totalTime;
}



module.exports = Cinema;
