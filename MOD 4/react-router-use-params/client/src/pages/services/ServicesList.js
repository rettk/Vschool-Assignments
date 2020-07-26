import React from "react"
import servicesData from "./servicesData"
import { Link, Switch, Route } from "react-router-dom"
import ServiceDetail from "./ServiceDetail"

function ServicesList() {
    const services = servicesData.map(service => (
        <h2 key={service._id}><Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}</h2>
    ))
    return (
        <div>
            <div>
                <h1>Services List Page</h1>
                {services}
            </div>

            <Switch>
                <Route path="/services/:serviceId">
                    <ServiceDetail />
                </Route>

            </Switch>

        </div>
    )
}

export default ServicesList

