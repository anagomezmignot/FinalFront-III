import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    setFavInStorage,
    isFavorited,
    removeFavInStorage,
} from "./utils/localStorage.service";
import { ContextGlobal } from "./utils/global.context";
import styles from "./Card.module.css";
import { useEffect } from "react";


// Aqui iria la logica para agregar la Card en el localStorage

const Card = ({ name, username, id }) => {
    
    const [favorite, setFavorite] = useState(false);

    const handleFav = () => {
        if(isFavorited(id)) {
            removeFavInStorage(id)
            setFavorite(false)
        } else {
            setFavInStorage({ name, username, id })
            setFavorite(true)
        }
    }

    useEffect(() => {
        setFavorite(isFavorited(id))
    }, [])

    const { theme } = useContext(ContextGlobal);
    const isDarkMode = theme === "dark" || false;

    return (
        <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
            <img
                className="card-img-top"
                src="/images/doctor.jpg"
                alt="doctor placeholder"
            />
            <div className={`card-body ${styles.CardBody}`}>
                <Link to={`/dentist/${id}`}>
                    <h5 className={`card-title ${styles.title}`}>{name}</h5>
                </Link>
                <p className="card-text">{username}</p>
                <button
                    onClick={handleFav}
                    className={`btn btn-${isDarkMode ? "dark" : "light"} ${styles.favButton
                        }`}
                >
                    {isFavorited(id) ? "❌ Remove from favorite" : "⭐ Add to favorite"}
                </button>
            </div>
        </div>
    );
}


export default Card;
