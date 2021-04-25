import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/template/Navigation';
import Sidebar from '../components/template/Sidebar';

const Main = (props) => (
    <HelmetProvider>
        <Helmet titleTemplate="%s | Chak Yuen Cheng" defaultTitle="Chak Yuen Cheng">
            {props.title && <title>{props.title}</title>}
            <meta name="description" content={props.description} />
        </Helmet>
        <div id="wrapper">
            <Navigation />
            <div id="main">
                {props.children}
            </div>
            {props.fullPage ? null : <Sidebar />}
        </div>
    </HelmetProvider>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Chak Yuen Cheng's personal website.",
};

export default Main;