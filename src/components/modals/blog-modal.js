import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from "../blog/blog-form";

ReactModal.setAppElement(".app-wrapper")

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50% ",
                width: "800px",
                height: "80%"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };

        this.handleFormSubmission = this.handleFormSubmission.bind(this)
    }


    handleFormSubmission(blog) {
        this.props.handleNewBlogSubmission(blog);
    }


    render() {
        return(
            <ReactModal 
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }} 
                isOpen={this.props.modalIsOpen}
            >
                <BlogForm 
                handleFormSubmission={this.handleFormSubmission} />
            </ReactModal>
        )
    }
}
