import React from "react"

export default function Card(props) {
    const {id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
    return (
        <div className="card-container">
            <img className="card-img" src={imageUrl} />
            <div className="card-information">
                <p className="card-top"><i className="fa-solid fa-location-dot card-icon"></i> <span className="card-location">{location}</span>
                <a href={googleMapsUrl} className="card-maps">View on Google Maps</a></p>
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{startDate} - {endDate}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}