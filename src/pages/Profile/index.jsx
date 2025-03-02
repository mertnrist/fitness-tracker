import { Outlet } from "react-router-dom"
import ProfileNavigation from './components/ProfileNavigation'
import Navbar from "../../components/Navbar"
import Container from "../../components/shared/Container"

const Profile = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[300px_auto] gap-5">
                    <ProfileNavigation />
                    <Outlet />
                </div>
            </Container>
        </div>
    )
}

export default Profile
