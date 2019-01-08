// import axios from '../../../axios/index';
import { CHANG_LIST } from './constants'
const changList = (list) => ({
    type: CHANG_LIST,
    list
})

export const getHomeList = () => {
    return (dispatch, getState, axios) => {
        return new Promise((resolve, reject) => {
            axios({
                url: '/api/news-list'
            }).then(res => {
                if (res && res.code === 0) {
                    resolve(dispatch(changList(res.result.list)))
                } else {
                    reject(res)
                }
            }).catch(err => {
                reject(err)
                console.log(err)
            })
        })


    }
}

export const getHomeList1 = () => {
    return (dispatch, getState, axios) => {
        return new Promise((resolve, reject) => {
            axios({
                url: '/api/news-list2'
            }).then(res => {
                if (res && res.code === 0) {
                    resolve(dispatch(changList(res.result.list)))
                } else {
                    reject(res)
                }
            }).catch(err => {
                reject(err)
                console.log(err)
            })
        })


    }
}