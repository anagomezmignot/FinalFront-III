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


// Aqui iria la logica para agregar la Card en el localStorage

const Card = ({name, username, id}) => {
  const [favorite, setFavorite] = useState(() => isFavorited());
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  console.log(name)
  
      const isFavorite = (favorite) => {
        setFavorite(favorite);
      };
    
      const addFav = () => {
        const favorite = setFavInStorage({ name, username, id});
        isFavorite(favorite);
      };
    
      const removeFav = () => {
        const favorite = removeFavInStorage();
        isFavorite(favorite);
      };
      return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
    
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
    
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    
            <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody}`}>
            <Link to={`/dentist/`}>
              <h5 className={`card-title ${styles.title}`}>{}</h5>
            </Link>
            {/* <p className="card-text">{usuario?.username}</p> */}
            <button
              onClick={favorite ? removeFav : addFav}
              className={`btn btn-${isDarkMode ? "dark" : "light"} ${
                styles.favButton
              }`}
            >
              {favorite ? "❌ Remove from favorite" : "⭐ Add to favorite"}
            </button>
          </div>
        </div>
        </div>
      );
  }


export default Card;
