import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {pizzaData} from './data'

function App() {
    return <>
        <Header />
        <Menu />
        <Footer/>
    </>;
}

function Header() { 
    return <header className="header">
        <h1>
        Fast React Pizza Co.
        </h1>
    </header>
}

function Menu() { 
    return (
      <main className="menu">
        <h2>Our menu</h2>
        <ul className="pizzas">
        {pizzaData.map((data) => {
          return <Pizza name={data.name} ingredient={data.ingredients} photo={data.photoName} price={data.price} key={data.name} />
        })}

        </ul>
      </main>
    );
}

function Footer() {
  let hours = new Date().getHours()
  const openHours = 12
  const closeHours = 22;
  const isOpen= hours>= openHours&& hours<=closeHours
    let date = new Date()
    return ( 
      <footer className="footer">
        {date.toLocaleDateString()}. we're currently open
      </footer>
    );
 }

function Pizza(props) { 
  console.log(props.photo)
    return (
      <li className="pizza">
        <img src={props.photo} alt={props.name} />
        <div>
        <h3>{props.name}</h3>
        <p>{ props.ingredient}</p>
        <span>{props.price}</span>
        </div>
      </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
