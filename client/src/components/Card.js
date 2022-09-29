import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        var title = this.props.title; 
        var description = this.props.description; 
        var modal = this.props.modal; 
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">{description}</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Show More
                        </button>
                    </div>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">{this.props.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>{modal}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
            </div>
        )
    }
}