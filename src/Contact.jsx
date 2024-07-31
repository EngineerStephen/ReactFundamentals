import React, {Component} from "react";


class Contact extends Component {

    render(){

        const contact = [

            {
            SSN: 123456789, 
            Name: "Naa Mercy",
            Email: "naamercy@mercy.com"
            },
            {
                SSN: 123490349,
                Name: "Jubina Mugusa",
                Email: "jumug@jumbo.com"
            },  
        ]

return (

    <div className = "contactinfo">
        <h1> Contact Information</h1>
        <br />
        <p> {contact[0].Name}</p>
        <p> {contact[0].SSN}</p>
        <p> {contact[0].Email}</p>
        <br />
        <p> {contact[1].Name}</p>
        <p> {contact[1].SSN}</p>
        <p> {contact[1].Email}</p>
    </div>

)

    }

}

export default Contact; 