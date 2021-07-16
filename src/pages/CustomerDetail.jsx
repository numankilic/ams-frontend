import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import CustomerService from '../services/customerService'
export default function CustomerDetail() {
    let { id } = useParams()

    const [customer, setCustomer] = useState({})
    useEffect(() => {
        let customerService = new CustomerService()
        customerService.getCustomerById(id).then(result => setCustomer(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Adress</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>PassportNumber</Table.HeaderCell>
                    </Table.Row>

                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{customer.customerName}</Table.Cell>
                        <Table.Cell>{customer.email}</Table.Cell>
                        <Table.Cell>{customer.customerPhone}</Table.Cell>
                        <Table.Cell>{customer.address}</Table.Cell>
                        <Table.Cell>{customer.country}</Table.Cell>
                        <Table.Cell>{customer.passportNumber}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
