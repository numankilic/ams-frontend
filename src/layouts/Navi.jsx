import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import SelectedCustomers from '../pages/SelectedCustomers'
import { useSelector } from 'react-redux'
export default function Navi() {
    const {customerCartItems} = useSelector(state => state.customerCart)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item><Link to={`/`}>Home</Link></Menu.Item>


                    <Menu.Menu position='right'>
                        {customerCartItems.length>0&&<SelectedCustomers/>}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> :
                            <SignedOut logIn={handleSignIn} />}
                    </Menu.Menu>

                </Container>

            </Menu>
        </div>
    )
}
