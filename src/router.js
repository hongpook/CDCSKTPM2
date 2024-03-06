import { Route, Routes } from "react-router";
import Home from "./pages/user/home";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import Product from "./pages/user/product";


const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Home/>
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <Product/>
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key = {key}  path = {item.path} element={item.component}/>
                    ))
                } 
            </Routes>
        </MasterLayout>
    );
};


const RouterCustom = () =>{
    return renderUserRouter();
}

export default RouterCustom;