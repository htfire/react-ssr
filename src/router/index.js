import App from '../App'
import Home from '../containers/Home/index'
import Detail from '../containers/Detail/index'
import Login from '../containers/Login'
import NotFound from '../containers/NotFound'
import Redirect from '../containers/Redirect'

export default [
    {
        path: "/",
        component: App,
        key: 'App',
        loadData: App.loadData,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home,
                loadData: Home.loadData,
                key: 'Home'
            }, {
                path: "/detail",
                exact: true,
                component: Detail,
                // loadData: Login.loadData,
                key: 'Detail'
            }, {
                path: "/login",
                exact: true,
                component: Login,
                loadData: Login.loadData,
                key: 'Login'
            }, {
                path: "/redirect",
                exact: true,
                component: Redirect,
                key: 'Redirect'
            }, {
                component: NotFound,
            }
        ]
    }
]