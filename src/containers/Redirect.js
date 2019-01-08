import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class redirect extends Component {
    render() {
        return (
            <div>
                <Redirect to='/' />
            </div>
        )
    }
}
