import axios from "axios";
export default class CustomerService{
    getCustomers(){
        return axios.get("http://localhost:8080/api/customers/getall")
    }

    getCustomerById(id){
        return axios.get("http://localhost:8080/api/customers/getById?passportNumber="+id)
    }

    addNewCustomer(customer){
        return axios.post("http://localhost:8080/api/customers/add", customer)
    }
}