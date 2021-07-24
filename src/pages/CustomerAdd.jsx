import { Form, Formik } from 'formik'
import React, { } from 'react'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'
import AMSTextInput from '../utilities/customFormController/AMSTextInput'
import CustomerService from '../services/customerService'
export default function CustomerAdd() {

    const initialValues = {
        customerName: "",
        customerPhone: "",
        address: "",
        email: "",
        country: "",
        passportNumber: ""
    }
    let customer = {
        customerName: "",
        customerPhone: "",
        address: "",
        email: "",
        country: "",
        passportNumber: ""
    }
    function addCustomer(values){
        let customerService = new CustomerService()
        customer.customerName = values.customerName
        customer.customerPhone = values.customerPhone
        customer.address = values.address
        customer.email = values.email
        customer.country = values.country
        customer.passportNumber = values.passportNumber
        customerService.addNewCustomer(customer)
        
    }
    
    const schema = Yup.object({
        passportNumber: Yup.string().required("Passport Number required!"),
        customerName: Yup.string().required("Name and surname required!")
    })




    return (
        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                addCustomer(values)
            }}
        >
            <Form className="ui form">
                <AMSTextInput name="customerName" placeholder="customerName" />
                <AMSTextInput name="customerPhone" placeholder="customerPhone" />
                <AMSTextInput name="address" placeholder="address" />
                <AMSTextInput name="email" placeholder="email" />
                <AMSTextInput name="country" placeholder="country" />
                <AMSTextInput name="passportNumber" placeholder="passportNumber" />
                <Button color="green" type="submit">Add Customer</Button>
            </Form>
        </Formik>
    )
}
