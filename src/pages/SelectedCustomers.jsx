import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

export default function SelectedCustomers() {

    const { customerCartItems } = useSelector(state => state.customerCart)

    return (
        <div>
            <Dropdown item text="Selected Customers">
                <Dropdown.Menu>
                    {
                        customerCartItems.map((customerCartItem)=>(
                            <Dropdown.Item>{customerCartItem.customerName}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
