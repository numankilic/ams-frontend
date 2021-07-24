import { Form, Formik } from 'formik'
import { Button } from 'semantic-ui-react'
import React from 'react'
import AMSTextInput from '../utilities/customFormController/AMSTextInput'
import { useParams } from 'react-router-dom'
import * as Yup from "yup"
import CustomerService from '../services/customerService'


export default function CustomerUpdate() {
    let { id } = useParams()

    const initialValues = {
        customerName: "",
        customerPhone: "",
        address: "",
        email: "",
        country: "",
        passportNumber: id
    }
    const schema = Yup.object({
        customerName: Yup.string().required("Name and surname required!")
    })

    let customer = {
        customerName: "",
        customerPhone: "",
        address: "",
        email: "",
        country: "",
        passportNumber: id
    }
    function updateCustomer(values){
        let customerService = new CustomerService()
        customer.customerName = values.customerName
        customer.customerPhone = values.customerPhone
        customer.address = values.address
        customer.email = values.email
        customer.country = values.country
        customerService.updateCustomer(id, customer)

    }
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) =>
                updateCustomer(values)
                
            }
        >
            <Form className="ui form">
                <AMSTextInput name="customerName" placeholder="customerName" />
                <AMSTextInput name="customerPhone" placeholder="customerPhone" />
                <AMSTextInput name="address" placeholder="address" />
                <AMSTextInput name="email" placeholder="email" />
                <AMSTextInput name="country" placeholder="country" />
                <Button color="green" type="submit">Update Customer</Button>
            </Form>
        </Formik>
    )
}
