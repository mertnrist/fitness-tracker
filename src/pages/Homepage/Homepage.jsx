import Navbar from '../../components/_Navbar/Navbar'
import Header from './components/_Header/Header'

import Container from '../../components/shared/_Container/Container'
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
