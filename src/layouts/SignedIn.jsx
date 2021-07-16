import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="profilPhoto" />
                <Dropdown pointing="top left" text="Name">
                    <Dropdown.Menu>
                        <Dropdown.Item text="MyInfo" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Exit" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
