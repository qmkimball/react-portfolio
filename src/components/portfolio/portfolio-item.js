import React, { Component } from 'react';

export default class PortfolioItem extends Component {
    render() {
        return (
            <div className="app">
                <h3>{props.title}</h3>
                <h4>{props.url}</h4>
            </div>
        )
    }
}