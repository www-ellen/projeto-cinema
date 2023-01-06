import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes:[]
        };
    }

    componentDidMount() {
        fetch('https://alunos.b7web.com.br/cinema/') //site fora do ar
            .then(r => r.json())
            .then(json => {
                this.setState({filmes:json});
            });
    }

    render() {
        return (
            <div>

                {this.state.filmes.lenght == 0 && 
                    <span> Carregando.. </span>
                }

                {this.state.filmes.lenght > 0 &&
                    this.state.filmes.map((filme) => {
                        return (
                            <div style={{display:'inline-block', width:300,margin:10, textAlign:'center'}}>
                                <img src="{filme.avatar}" width="100%"/> <br/>
                                <span> Nome do Filme </span>
                            </div>
                        );
                    })
                }
            </div>
        )
    }

}