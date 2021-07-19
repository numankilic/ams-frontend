import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField } from 'semantic-ui-react'
import AMSTextInput from '../utilities/customFormController/AMSTextInput'

export default function CustomerAdd() {

    const initialValues = {
        customerName: "",
        customerPhone: "",
        address: "",
        email: "",
        country: "",
        passportNumber: ""
    }

    const schema = Yup.object({
        passportNumber: Yup.string().required("Passport Number required!"),
        customerName: Yup.string().required("Name and surname required!")
    })
    return (
        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
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
