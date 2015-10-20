import React, { Component } from 'react'
import _ from 'lodash'
import { StaggeredMotion, spring } from 'react-motion';

const NavLinks = [
    {label: "Index", "url":"/"},
    {label: "Grid", "url": "/grid"},
    {label: "Navigation", "url":"/navigation"},
    {label: "Tables", "url":"/tables"},
    {label: "Typography", "url":"/typography"},
    {label: "Lists", "url":"/lists"},
    {label: "Dialogs", "url":"/dialogs"},
    {label: "Helpers", "url":"/helpers"},
    {label: "Forms", "url":"/forms"}
];

const SpringText = React.createClass({
    getInitialState() {
        return {opacity: 0};
    },
    componentDidMount() {
        this.setState({
            opacity: spring(1, [1000, 80])}
        )
    },
    taggify(string, tag) {
        let taggedChars = []

        _.map(string, function(char) {
            taggedChars.push(`${char}`)
        })
        return taggedChars
    },
    getStyles(prevStyles) {
        // `prevStyles` is the interpolated value of the last tick
        const endValue = prevStyles.map((_, i) => {
            return i === 0 ? this.state: {
                opacity: spring(prevStyles[i - 1].opacity, [1000, 80])
            };
        });
        return endValue;
    },
    render() {
        let taggedText = this.taggify(`${this.props.text}`,'span')
        return(
            <StaggeredMotion defaultStyles={taggedText.map(() => ({opacity: 0}))} styles={this.getStyles}>
                {taggedText =>
                    <h1>
                        {taggedText.map(({opacity}, i) =>

                            <span key={i} style={{ opacity: `${opacity}`}}>
                                o
                            </span>
                         )}
                     </h1>
                 }
            </StaggeredMotion>
        );
    },
});

export default SpringText;
