import React, {useState} from 'react'
import './movies.css'
import Data from "./data/db.json"

import videoComponent from './assets/god1.mp4'






function Movies() {
    const [searchTerm, setSearchTerm] = useState("");
    
    
    return (
        <div>

        <div className="video__autoplay">
            <video autoPlay loop muted>
                <source src={videoComponent} type="video/mp4" />
            </video>
            <h1 className="header__header" >Godzila vs Kong </h1>
        </div>
        <div className="search_container">
        <input type="text" placeholder="search movies" onChange={event => {
            setSearchTerm(event.target.value);
        }}
         ></input>
        
        </div>

        <div className="movie__background">

        <div className="items">
        
            { Data.filter((val)=>{
                if (searchTerm === ""){
                    return val
                }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }else {
                    return('')
                }
            }).map(post => {
                return (
                    
                    
                    <a href={post.id} ><div  className="item"><img  className="img-responsive" src={post.image} alt="movie_images"/></div></a>
                    
                    
                    
                    
                    
                )
            })}
            

        </div>
        </div>
        
        

        </div>
    )
}

export default Movies