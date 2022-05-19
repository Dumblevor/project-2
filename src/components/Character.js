import React from "react"
// import { Link } from "react-router-dom"

/*
created: "2017-11-04T19:09:56.428Z"
episode: (42) ['https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/51']
gender: "Female"
id: 3
image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
name: "Summer Smith"
origin: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
species: "Human"
status: "Alive"
type: ""
url: "https://rickandmortyapi.com/api/character/3"
*/

function Character({ name, image, species, gender, origin, status, location }) {
  return (
    <div className="level box media">
      <h2 className="card-header card-header-title level-item has-text-centered">{name}</h2>
      <div className="card card-content level-item">
        <p className="block ">Species: {species} <br />
          Origin: {origin.name} <br />
          Current status: {status}<br />
          Gender: {gender}<br />
          Location: {location.name}<br />
        </p>
      </div>
      <div className="card level-item has-text-centered">
        <img src={image} />
      </div>
    </div>
  )
}

export default Character