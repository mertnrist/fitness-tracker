import Navbar from '../../components/Navbar'
import Header from './components/Header'

import Container from '../../components/shared/Container'
import { useState } from 'react'


const Homepage = () => {
    const [registerModal, setRegisterModal] = useState(false)

    return (
        <>
            <Navbar registerModal={registerModal} setRegisterModal={setRegisterModal} />
            <Container>
                <Header setRegisterModal={setRegisterModal} />
            </Container>
        </>
    )
}

export default Homepage
