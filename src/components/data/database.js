import React from 'react'
import Data from "./db.json"


function Database() {
    return (
        <div>
            { Data.map(post => {
                return(
                    <h4>{post.immage}</h4>
                )
            })}
        </div>
    )
}

export default Database
