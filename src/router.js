import { Route, Routes } from "react-router";
import Home from "./pages/user/home";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import Product from "./pages/user/product";
import Shop from "./pages/user/shop";
import Blog from "./pages/user/blog";
import Contact from "./pages/user/contact";
import AboutUs from "pages/user/about_Us/aboutUs";


const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Home/>
        },
        {
            path: ROUTERS.USER.SHOP,
            component: <Shop/>
        },
        {
            path: ROUTERS.USER.BLOG,
            component: <Blog/>
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: <Contact/>
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <Product/>
        },
        {
            path: ROUTERS.USER.ABOUT_US,
            component: <AboutUs/>
        },
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