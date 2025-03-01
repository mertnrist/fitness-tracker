import { Outlet } from "react-router-dom"
import ProfileNavigation from './components/ProfileNavigation'
import Navbar from "../../components/Navbar"
import Container from "../../components/shared/Container"

const Profile = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <ProfileNavigation />
                <Outlet />
            </Container>
        </div>
    )
}

export default Profile
