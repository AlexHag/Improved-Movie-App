import React, { useState, useEffect } from 'react';

import Weather from './Weather';

import '../css/home.css'

function Home() {
    return (
        <>
            <h1 className="h1-home-title">WELCOME TO SRC</h1>
            <div className="home-container">
                <div className="home-column">
                    <h1 className="daily-brief-header">Daily Brief</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, recusandae sed adipisci molestias magnam officiis corporis aut beatae praesentium laborum nesciunt, delectus expedita! Id in impedit quasi neque esse exercitationem deleniti, voluptatem nemo quis dolores optio. Cumque esse quia qui nobis aspernatur distinctio laudantium eum nihil! Dolorum aperiam similique totam, omnis illo odio eum maxime ea veniam vero ad quas expedita neque officiis sunt! Omnis veniam aliquid explicabo, placeat odio amet dolorum natus magni eveniet reprehenderit porro, molestiae blanditiis. Dolorem quae iusto doloribus laboriosam odit? Neque repellat velit iusto, aut, corporis voluptatibus exercitationem asperiores commodi incidunt ratione modi aliquid? Quas.</p>
                </div>
                <div className="home-column">
                    <Weather />
                </div>
            </div>
        </>
    )
}

export default Home;