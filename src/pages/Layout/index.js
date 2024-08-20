import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
            我是Layout
            {/* 测试全局生样式 */}
            <Button color="primary">测试全局</Button>
            <div className="purple">
                <Button color="primary">测试局部</Button>
            </div>
        </div>
    )
}
export default Layout