import React from 'react';
import Navigation from '../components/Navigation';
import Cards from '../components/Cards';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Search />
            <br />
            <div className="container">
                <div class="row justify-content-end">
                    <Filter />
                    <Cards />
                </div>
            </div>
            <br />
            <Pagination/>
            <Footer/>
        </div>
    );
};

export default Home;