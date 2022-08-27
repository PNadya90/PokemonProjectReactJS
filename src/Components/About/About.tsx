import "./About.scss";
function About() {
  return (
    <div className="aboutUs-container">
      <div className="welcomHeader-area">
        <h2 className="welcomHeader">About us</h2>
      </div>
      <div className="imgBox">
        <img src="for_aboutUs.png" className="imgAboutUs" alt="about us" />
      </div>

      <div className="info-aboutUs">
        <p>
          Our company has a mission to delight our fans through excellent
          products and meaningful experiences. We hope to help make the world a
          better place for everyone by creating opportunities to bond and grow
          through shared journeys and friendly competition. Pokémon was launched
          in Japan in 1996 and today is one of the most popular children's
          entertainment properties in the world.
        </p>
        <h3>Our Core Values:</h3>
        <p>
          We have a passion for Pokémon that drives us to understand the impact
          our brand has on teammates, fans, players, and communities.
        </p>
        <h3>Diversity and Inclusion:</h3>
        <p>
          We are committed to supporting our people, our fans, and our
          communities. We live this commitment through our philanthropy; robust
          benefits; and diversity, equity, and inclusion efforts embedded
          throughout the company and culture.
        </p>
        <h3>Social Responsibility:</h3>
        <p>
          We believe we can help make the world a better place through our
          Corporate Social Responsibility efforts and bring the fun of Pokémon
          to people around the world. Our goal is to make a positive impact for
          children and our communities by establishing long-term and intentional
          partnerships with organizations dedicated to children and those that
          address equity.
        </p>
      </div>
    </div>
  );
}

export default About;
