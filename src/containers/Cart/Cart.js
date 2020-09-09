import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProduitConsumer } from '../../containers/Context';
import CartList from './CartList';
import CartTotals from './CartTotals';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProduitConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="votre" title="panier" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }


                    }}


                </ProduitConsumer>

            </section>

        );
    }
}