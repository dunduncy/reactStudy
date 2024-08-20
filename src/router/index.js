// 创建路由实例 绑定 path element
import Layout from '@/pages/Layout'
import Month from '@/pages/Month'
import New from '@/pages/New'
import Year from '@/pages/Year'
import {createBrowserRouter} from 'react-router-dom'
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                index:1,
                element:<Month/>
            },
            {
                path:'year',
                element:<Year/>
            }
        ]
    },
    {
        path:'/new',
        element:<New></New>
    },
])
export default router