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
    deleteCustomer(id){
        return axios.delete("http://localhost:8080/api/customers/deleteById?passportNumber="+id)
    }
    updateCustomer(id, customer){
        return axios.put("http://localhost:8080/api/customers/update/" +id, customer)
    }
}