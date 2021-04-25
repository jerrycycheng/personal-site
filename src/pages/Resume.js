import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Resume = () => (
    <Main title="Resume" description="Chak Yuen Cheng's Resume">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/resume">Resume</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default Resume;