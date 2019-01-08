import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import styles from './assets/css/common.less'
import wrapStyle from './components/higherOrderComponent/wrapStyle'

class App extends Component {
    render() {
        return (
            <div>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}


const ExportApp = wrapStyle(App, styles)

ExportApp.loadData = (store) => {
    // do something
}

export default ExportApp