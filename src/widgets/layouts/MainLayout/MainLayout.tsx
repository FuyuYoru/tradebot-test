import { Header } from "@/widgets/layouts/MainLayout/Header";
import { NavBar } from "@/widgets/layouts/MainLayout/NavBar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout:FC = () =>  {
    return(
        <div className="flex flex-col w-[100%] h-[100%]">
            <Header />
            <div>
                <Outlet />
            </div>
            <NavBar />
        </div>
    )
}