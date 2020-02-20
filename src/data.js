import mulan_movie_poster from "./images/mulan-movie-poster.jpeg";
import titanic_kodflix from "./images/titanic-hd.jpg";
import pirates from "./images/pirates.jpg";
import chocolat from "./images/chocolat-movie-poster.jpg";
import forrest_gump from "./images/forrest_gump.jpg";
import a_star_is_born from "./images/a_star_is_born.jpg";
export default function getMovies() {
    return [
        {id:"Mulan",
         name: "Mulan", 
         logo: mulan_movie_poster}, 

         {id:"Titanic",
         name: "Titanic", 
         logo: titanic_kodflix},

         {id:"Pirates",
         name: "Pirates", 
         logo: pirates},

         {id:"Chocolat",
         name: "Chocolat", 
         logo: chocolat},
         
         {id:"Forrest_gump",
         name: "Forrest_gump", 
         logo:  forrest_gump},

         {id:"A star is born",
         name: "A star is born", 
         logo: a_star_is_born},
        

    ]
}