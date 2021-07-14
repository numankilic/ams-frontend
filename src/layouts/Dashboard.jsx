import React from 'react'
import CustomerList from '../pages/CustomerList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Categories/>
            <CustomerList/>
        </div>
    )
}
