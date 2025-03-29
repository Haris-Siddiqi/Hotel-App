import React from "react";
import "./HomePage.css"; // Ensure you create this CSS file for styling

const HomePage = () => {
  // Dummy data for hotels
  const hotels = [
    { id: 1, name: "Grand Hotel", location: "New York", price: "$150/night" },
    { id: 2, name: "Cozy Inn", location: "Los Angeles", price: "$120/night" },
    { id: 3, name: "Seaside Resort", location: "Miami", price: "$200/night" },
  ];

  return (
    <div className="home-container">
      <header>
        <h1>Available Hotels</h1>
        <button className="join-btn">Join</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>{hotel.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
