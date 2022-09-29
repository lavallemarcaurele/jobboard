import React from 'react';

const Filter = () => {
    return (
        <div className="card col-xs-12 col-sm-12 col-md-2">
            <form class="form-horizontal">
                <div className="form-group">
                    <strong>Contrats</strong>
                    <div className="checkbox">
                        <label><input type="checkbox" /> CDI</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Alternance</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> CDD</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Stage</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Intérim</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Franchise</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Indépendant</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Associé</label>
                    </div>
                    <strong>Salaire minimum</strong>
                    <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
                </div>
            </form>
        </div>
    );
};

export default Filter;