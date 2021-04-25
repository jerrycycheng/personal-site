import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Projects = () => (
    <Main title="Projects" description="Chak Yuen Cheng's Work and Projects">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default Projects;