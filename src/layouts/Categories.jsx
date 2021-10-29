import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item><Link to={`/customers`}>Customers</Link></Menu.Item>
                <Menu.Item><Link to={`/customer/add`}>Add Customer</Link></Menu.Item>
                <Menu.Item><Link to={`/customer/update/:id`}>Update customer</Link></Menu.Item>
            </Menu>
        </div>
    )
}
