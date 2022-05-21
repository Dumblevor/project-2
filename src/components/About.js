import React from "react"

function About() {
  return (
    <div className="container-about card ">
      <section className="card aboutcard">
        <h2>Creators</h2>
        <h3>This project was developed by Dimitar and Laleh as part of General Assembley&apos;s Software Engineering Immersive (SEI) coding bootcamp.</h3>
        <p>Logo credit: Dimitar</p>
      </section>

      <section className="card aboutcard">
        <h2>Other Assets</h2>
        <p>API utilized: <a href="https://rickandmortyapi.com">https://rickandmortyapi.com</a></p>
        <p>CSS packaged used: <a href="https://bulma.io">https://bulma.io</a></p>
      </section>

      <div className="box aboutcard">
        <h2>Check out our other projects:</h2>

        <div className="box">
          <p>Dimitar&rsquo; s Space Invaders (Project #1): <a href="https://dumblevor.github.io/spce_inv1/">Play it here.</a></p>

          <p>Dimitar&rsquo; s GitHub page: <a href="https://github.com/Dumblevor">Link.</a></p>
        </div>
        <div className="box">
          <p>Laleh&rsquo; s Pac-Man (Project #1): <a href="https://laleh-s.github.io/GA-Project-1/">Play it here.</a></p>

          <p>Laleh&rsquo; s GitHub page: <a href="https://github.com/Laleh-S">Link.</a></p>
        </div>
      </div >
    </div >

  )

}

export default About