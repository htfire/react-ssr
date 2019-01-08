import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.less'
import wrapStyle from '../higherOrderComponent/wrapStyle'
import { Helmet } from "react-helmet"

class Header extends Component {

    // componentWillMount() {
    //     const { staticContext } = this.props
    //     if (styles._getCss) {
    //         let css = styles._getCss()
    //         console.log(css)
    //         staticContext.css.push(css)
    //     }
    // }

    render() {
        return (
            <div className="header-box">
                <Helmet>
                    <title>My Title</title>
                </Helmet>
                <Link to="/">Home</Link>
                <br />
                <Link to="/login">Login</Link>
                <br />
                <Link to="/logina">404</Link>
            </div>
        )
    }
}

export default wrapStyle(Header, styles)
