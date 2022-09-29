import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
    state = {
        cards: [
            {
                id: 1,
                title: 'developpeur fullstack',
                description:"recherche developpeur fullstack web",
                modal:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at laudantium rem eligendi, qui eveniet atque nesciunt rerum quisquam eum aperiam nemo voluptatem fugit! Aut sequi ut odio voluptate sapiente!"
            },
            {
                id: 2,
                title: 'ingenieur fullstack',
                description:"recherche ingenieur fullstack web",
                modal:"Lorem ipsum dolor"
            },
            {
                id: 3,
                title: 'ingenieur',
                description:"recherche ingenieur",
                modal:"afk"
            }
        ]
    }
    render(){
        return (
            <div className="col-xs-12 col-sm-12 col-md-10">
                {this.state.cards.map(card => (
                    <Card
                        title={card.title}
                        description={card.description}
                        modal={card.modal}
                    />
                ))}
            </div>
            
        )
    }
}