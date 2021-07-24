import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import CustomerService from '../services/customerService'
import { addToCustomerCart } from '../store/actions/customerCartActions'
import { toast } from 'react-toastify'

export default function CustomerList() {

    const dispatch = useDispatch()
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        let customerService = new CustomerService()
        customerService.getCustomers().then(result => setCustomers(result.data.data))
    }, [])
    function deleteCustomer(id) {
        let customerService = new CustomerService()
        customerService.deleteCustomer(id)
    }


    const handleAddtoCustomerCart = (customer) => {
        dispatch(addToCustomerCart(customer))
        toast.success(`${customer.customerName} selected`)
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        customers.map(customer => (
                            <Table.Row key={customer.passportNumber}>
                                <Table.Cell><Link to={`/customers/${customer.passportNumber}`}>{customer.customerName}</Link> </Table.Cell>
                                <Table.Cell>{customer.email}</Table.Cell>
                                <Table.Cell>{customer.customerPhone}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => handleAddtoCustomerCart(customer)}>Select</Button>
                                    <Button onClick={deleteCustomer(customer.passportNumber)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        ))
                    }


                </Table.Body>
            </Table>
        </div>
    )
}
