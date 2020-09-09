import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>erreur</h1>
                        <h2>page non trouvee</h2>
                        <h3>
                            La demande URL
                        <span className="text-dander">
                                {this.props.location.pathname}
                            </span>{" "}
                        na pas ete trouver
                        </h3>

                    </div>
                </div>
            </div>
        )
    }
}
