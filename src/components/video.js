import React from 'react'

import YouTube from '@u-wave/react-youtube';




function Video({ match }) {
    const url = match.params.id;


    return (
        <div>
            <YouTube
                video="7f0p9vb5d4k"
                autoplay
            />
        </div>
    )
}

export default Video
