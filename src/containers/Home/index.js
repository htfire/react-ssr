import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.less'
import wrapStyle from '../../components/higherOrderComponent/wrapStyle'
import { Link } from 'react-router-dom'

export class Home extends Component {
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getHomeList()
        }
    }

    render() {
        return (
            <div className='content'>
                <ul className='content-lists'>
                    {
                        this.props.list.map((item) => {
                            return <li key={item.id}>
                                <Link to="/detail" className='list-item'>
                                    <div className="left-box">
                                        <p>{item.csentence}</p>
                                        <div><span></span></div>
                                    </div>
                                    <div className="right-box">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.home.newsList,
    // name: state.home.name
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(wrapStyle(Home, styles))
ExportHome.loadData = (store) => {
    return store.dispatch(getHomeList())
}

export default ExportHome
