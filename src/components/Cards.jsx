import React from "react";
import "./css/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import useGsapScrollCards from "../hooks/useGsapScrollCards";

const Cards = () => {
    useGsapScrollCards(".grid");
    const cards = [
        {
            price: "Charlotte",
            timeLeft: "03-04",
            image: "https://viciousmagazine.com/wp-content/uploads/2024/06/89ed35df-1f7d-4e65-ad1d-b4fcae49f914.png",
        },
        {
            price: "D-Nox",
            timeLeft: "15-05",
            image: "https://proton-profile-images.storage.googleapis.com/avatars/artist_1806_1599850232.jpg",
        },
        {
            price: "Vini Vici",
            timeLeft: "20-06",
            image: "https://fm-booking.com/wp-content/uploads/2024/12/RAMI3571-copy-2-scaled.jpg",
        },
    ];

    return (
        <div className="container cards">
            <div className="cards-limitter">
                <h2 className="title-section">Proximos Eventos</h2>
                <div className="grid">
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <div className="badge">Limited Edition</div>
                            <div className="image-container" style={{ backgroundColor: card.background }}>
                                <img
                                    src={card.image}
                                    alt={`NFT Card ${index + 1}`}
                                    className="image"
                                />
                            </div>
                            <div className="footer">
                                <div className="price-section">
                                    <div className="price-indicator" />
                                    <span className="price-text">{card.price}</span>
                                </div>
                                <div className="time-left">
                                    <FontAwesomeIcon icon={faCalendarCheck} />
                                    <span>
                                        {card.timeLeft}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;