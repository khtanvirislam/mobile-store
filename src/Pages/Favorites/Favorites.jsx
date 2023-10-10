import React, { useEffect, useState } from "react";
import { OnePhoneCard } from "../../Components/Phones/OnePhoneCard";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState("");

  useEffect(() => {
    const favoritesItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoritesItems) {
      setFavorites(favoritesItems);
    } else {
      setNoFound("No Data Found ");
    }
  }, []);

  console.log(favorites);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No Data Found ");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-screen flex justify-center items-center text-2xl font-medium">
          {noFound}
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <button
              onClick={handleRemove}
              className="text-xl px-5 bg-green-300 mx-auto rounded mt-10 flex justify-center items-center"
            >
              Delete All Favorites
            </button>
          )}
          <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2  gap-10">
            {favorites.map((phone) => (
              <OnePhoneCard key={phone.id} phone={phone}></OnePhoneCard>
            ))}
          </div>
          <button
            onClick={handleRemove}
            className="text-xl px-5 bg-green-300 mx-auto rounded mt-10 flex justify-center items-center"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};
