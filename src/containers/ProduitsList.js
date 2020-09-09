import React, { Component } from 'react'
import Produits from './Produits';
import Title from './Title';

import { ProduitConsumer } from '../containers/Context';



export default class ProduitsList extends Component {

    render() {

        return (
            <React.Fragment>

                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="produits" />
                        <div className="row">
                            <ProduitConsumer>
                                {value => {

                                    return value.produits.map(produit => {
                                        return <Produits key={produit.id} produit={produit} />;
                                    });
                                }}
                            </ProduitConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
