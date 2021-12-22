import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                { title: "Quinn", category: "Oldest Daughter" }, 
                { title: "August", category: "Oldest Son" },
                { title: "Ciel", category: "Daughter" },
                { title: "Cael", category: "Annoying"}
            ]
        };

        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }


    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        });
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something To put on the page"
    //     });
    // }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                

                <hr/>
                <button onClick={() => this.handleFilter('Oldest Daughter')}>
                    Oldest Daughter
                </button>
                
                <button onClick={() => this.handleFilter('Oldest Son')}>
                    Oldest Son
                </button>
                
                <button onClick={() => this.handleFilter('Daughter')}>
                    Daughter
                </button>
                
            </div>
        );
    }
}