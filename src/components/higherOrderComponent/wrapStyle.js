import React, { Component } from 'react'

export default (WrappedComponent, styles) => {
    class wrapStyle extends Component {

        componentWillMount() {
            const { staticContext } = this.props
            if (styles._getCss) {
                let css = styles._getCss()
                staticContext.css.push(css)
            }
        }

        render() {
            return (
                <div>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
    return wrapStyle
}
