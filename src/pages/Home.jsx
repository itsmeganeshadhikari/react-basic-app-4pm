import { Outlet } from "react-router-dom"
import NavBar from "../components/layout/NavBar"

const Home = () => {
    return (
        <>
            <NavBar />
            <div style={{ paddingTop: "80px", backgroundColor: "whitesmoke" }}>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home