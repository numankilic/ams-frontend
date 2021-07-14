import React from 'react'
import { Grid } from 'semantic-ui-react'
import CustomerList from '../pages/CustomerList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Grid columns={2}>
                <Grid.Row >
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <CustomerList />

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
