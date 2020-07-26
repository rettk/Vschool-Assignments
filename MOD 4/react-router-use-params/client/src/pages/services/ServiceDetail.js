import React from "react"
import { useParams } from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const { serviceId } = useParams()
    const thisService = servicesData.find(service => service._id === serviceId)
    console.log(serviceId)
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h2>{thisService.name}</h2>
        </div>

    )
}

export default ServiceDetail