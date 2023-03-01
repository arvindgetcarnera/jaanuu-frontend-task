import React from "react";
import Container from "react-bootstrap/Container";

const Section = () => {
  return (
    <Container
      fluid
      className={`d-flex flex-column align-items-center p-4 py-5 vh-100 bg-secondary`}
    >
      <div className='w-75'>
        <h3 className='text-center'>Lorem Ipsum</h3>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus
          ligula, vulputate nec auctor et, euismod et quam.
        </p>
        <p className='text-center'>
          Morbi porttitor pellentesque ante, non tincidunt tortor placerat eu.
          Quisque eu erat interdum, ultricies augue cursus, tempor justo.
        </p>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet bibendum turpis. Donec sit amet ante sodales, mattis massa ut,
          consequat orci. Maecenas ut felis vel nunc maximus placerat quis
          sollicitudin magna. Proin in mi a ligula porta imperdiet vitae et
          purus.
        </p>
      </div>
    </Container>
  );
};

export default Section;
