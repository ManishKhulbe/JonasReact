import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const CityContext = createContext();

const BASE_URl = "http://localhost:8000";
function CityContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URl}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URl}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
   }

    async function createCity(newCity) {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URl}/cities`, {
          method: 'POST',
          body: JSON.stringify(newCity),
          headers: {
            "Content-Type":'application/json'
          }
        });
        const data = await res.json();
        setCities((cities) => [...cities, data]);
      } catch (error) {
        alert("There was an error creating city...");
      } finally {
        setIsLoading(false);
      }
    }
  
      async function deleteCity(id) {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URl}/cities/${id}`, {
            method: "DELETE",
           
          });
          setCities((cities) => cities.filter((city) => city.id !== id));
        } catch (error) {
          alert("There was an error deleting city...");
        } finally {
          setIsLoading(false);
        }
      }
  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("Context is used outside the context provider , (cities)");
  return context;
}

export { CityContextProvider, useCities };
