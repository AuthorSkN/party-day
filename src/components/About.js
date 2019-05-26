import React from 'react';
import Local from '../local.json';
import { CSSTransitionGroup } from 'react-transition-group';

const About = () => {
    return (
        <CSSTransitionGroup
            transitionName="aboutTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className="content">
                <h4>{Local.ABOUT}</h4>
            </div>
        </CSSTransitionGroup>
    );
}

export default About;