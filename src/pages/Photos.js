import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Photos = () => (
    <Main title="Noob's Work" description="Some Terrible Photos taken by Chak Yuen Cheng">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/photos">Photots</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default Photos;