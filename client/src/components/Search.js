import React from 'react';

const Search = () => {
    return (
        <nav className="navbar bg-primary">
            <form className="row col-12 col-sm-12 col-md-12 justify-content-center">
                <div className="row col-xs-12 col-sm-12 col-md-5">
                    <input className="form-control" type="search" placeholder="Quoi ?" aria-label="Search" />
                </div>
                <div className="row col-xs-12 col-sm-12 col-md-5">
                    <input className="form-control" type="search" placeholder="Où ?" aria-label="Search" />
                </div>
                <div className="row col-3 col-sm-3 col-md-2">
                    <button className="btn btn-secondary" type="submit">Search</button>
                </div>
            </form>
        </nav>
    );
};

export default Search;