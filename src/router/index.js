//用于创建路由器
import VueRouter from 'vue-router'
import CoverPage from '../pages/CoverPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ThoughtUPage from '../pages/ThoughtUPage'
import ThoughtDetail from '../pages/ThoughtDetail'
import SignCheck from '../pages/SignCheck'
import TaskDistribute from '../pages/TaskDistribute'
import TaskDetailInfo from '../pages/TaskDetailInfo'
import TaskOut from '../pages/TaskOut'

//创建并暴露一个人路由器
const router= new VueRouter({
    routes:[
        {
            path:'/',
            component:CoverPage,
            directives:'/coverpage'

        },
        {
            path:'/coverpage',
            component:CoverPage
        },
        {
            path:'/loginpage',
            component:LoginPage
        },
        {
            path:'/homepage',
            component:HomePage
        },
        {
            path:'/thoughtupage',
            component:ThoughtUPage
        },
        {
            path:'/thoughtdetail',
            component:ThoughtDetail
        },
        {
            path:'/signcheck',
            component:SignCheck
        },
        {
            path:'/taskdistribute',
            component:TaskDistribute
        },
        {
            path:'/taskdetailinfo',
            component:TaskDetailInfo
        },
        {
            path:'/taskout',
            component:TaskOut
        }
    ]
})
/* router.beforeEach((to,from,next)=>{
    if(to.path === '/loginpage') return next
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/loginpage')
    next()
}) */
export default router