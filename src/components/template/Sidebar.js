import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={process.env.PUBLIC_URL + '/me.JPG'} alt="" />
            </Link>
            <header>
                <h2>Chak Yuen Cheng</h2>
                <p><a href="mailto:jerrycyuen.cheng@gmail.com">jerrycyuen.cheng@gmail.com</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>Hi, I&apos;m Chak Yuen (Jerry).
                I am a <a href="https://www.ece.cmu.edu/">CMU ECE</a> graduate.
                After graduation, I work as a software engineer who builds
                healthcare solutions at <a href="https://www.cerner.com/">Cerner</a>.
            </p>

            <p>I am also a noob in gaming and photography</p>
        </section>
    </section>
)

export default Sidebar;