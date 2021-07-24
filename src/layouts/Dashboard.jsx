import React from 'react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Grid } from 'semantic-ui-react'
import CustomerAdd from '../pages/CustomerAdd'
import CustomerDetail from '../pages/CustomerDetail'
import CustomerList from '../pages/CustomerList'
import CustomerUpdate from '../pages/CustomerUpdate'
import Home from '../pages/Home'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid columns={2}>
                <Grid.Row >
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/customers" component={CustomerList} />
                        <Route path="/customers/:id" component={CustomerDetail} />
                        <Route path="/customer/add" component={CustomerAdd} />
                        <Route path="/customer/update" component={CustomerUpdate}></Route>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
