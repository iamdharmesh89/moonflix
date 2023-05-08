export default async function movies(name){
    try{
        let data = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=47cff2bc9ba543e2c1ea46e263f05d97`)
        let movie = await data.json();
        return movie.results;
    }
    catch(err){
        console.log(err)
    }
}
