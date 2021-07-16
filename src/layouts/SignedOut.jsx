import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({logIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={logIn} primary>Login</Button>
                <Button primary style={{marginLeft:'0.5em'}}>SignedUp</Button>
            </Menu.Item>

        </div>
    )
}
