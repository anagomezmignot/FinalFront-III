import React from 'react'
import { useContext, useState, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context"





//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);  


    useEffect(() => {
      try {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => setDentist(data));
      } catch (error) {
        console.error(error);
      }
    }, []);
console.log(dentist)
    return (
      <>
        <h1>Home</h1>
        <div className="card-grid container">
      {/* Aqui deberias renderizar las cards */}
        {dentist.length
          ? dentist.map((dentista) => (
              <Card key={dentista.id}
              {...dentista} />
            ))
          : null}
      </div>
    </>
  );
};

export default Home;