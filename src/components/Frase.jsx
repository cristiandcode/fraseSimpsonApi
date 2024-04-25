import { Card } from "react-bootstrap";

const Frase = ({ frasePersonaje }) => {
  return (
    <section className="my-5">
      <h2>{frasePersonaje.character}</h2>
      <hr />
      <img
        className="mb-3"
        src={frasePersonaje.image}
        alt={frasePersonaje.character}
      />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>{frasePersonaje.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {frasePersonaje.character} in{" "}
              <cite title="Source Title">The Simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
