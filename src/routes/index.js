import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LazyLoad from "../components/LazyLoad";

const Login = lazy(() => import('../pages/Login'));
const LazyLogin = props => <LazyLoad component={Login} {...props} />;

const Home = lazy(() => import('../pages/Home'));
const LazyHome = props => <LazyLoad component={Home} { ...props} />

export default function getRoutes() {
    return <Routes>
        <Route element={<LazyLogin />}  path="/login"/>
        <Route element={<LazyHome />}  path="/"/>
    </Routes>
}