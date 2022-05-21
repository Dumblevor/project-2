import React from "react"

function About() {
  return (
    <div className="container-about card ">
      <section className="card aboutcard">
        <h2>Creators</h2>
        <h3>This project was developed by Dimitar and Laleh as part of General Assembley Softwear engineer bootcamp.</h3>
        <p>Instructions by: <strong>Laleh</strong></p>
        <p>Logo by: <strong>Dimitar</strong></p>
      </section>

      <section className="card aboutcard">
        <h2>Other Assets</h2>
        <p>API utilized: <a href="https://rickandmortyapi.com">https://rickandmortyapi.com</a></p>
        <p>CSS packaged used: <a href="https://bulma.io">https://bulma.io</a></p>
      </section>

      <section className="card aboutcard">
        <h2>Check out our other projects:</h2>
        <p>Dimitar&rsquo; s GitHub page: <a href="https://github.com/Dumblevor">https://github.com/Dumblevor</a></p>
        <p>Laleh&rsquo; s GitHub page: <a href="https://github.com/Laleh-S">https://github.com/Laleh-S</a></p>
      </section>
    </div>

  )

}

export default About