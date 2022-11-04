import React from "react";


interface MovieInformation {
    id : number
    title : string,
    description : string,
    img : string
}

function MovieCard({id, title, description, img} : MovieInformation) {
    return (
        <>
            <div className="movie-frame">
                <img src={img} className="img-frame" />
                <h3 className="title-frame">{title}</h3>
                <p className="description">{description}</p>
                {/* <div className="movie-buttons">
                    <button>Details</button>
                </div> */}
            </div>
        </>
    )
}

export default MovieCard;