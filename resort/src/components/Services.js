import React, { Component } from 'react'
import Title from './Titles'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services : [
            {
                icon : <FaCocktail/>,
                title : "Free cocktails",
                info : "Lorem ipsum"
            },
            {
                icon : <FaHiking/>,
                title : "Free hiking",
                info : "Lorem ipsum"
            },
            {
                icon : <FaShuttleVan/>,
                title : "Free shuttle van",
                info : "Lorem ipsum"
            },
            {
                icon : <FaBeer/>,
                title : "Free beer",
                info : "Lorem ipsum"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
