import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

const Home = () => {
  const cards = [
    {
      title: "Card title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      imgSrc: "https://via.placeholder.com/500x325",
    },
    {
      title: "Card title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      imgSrc: "https://via.placeholder.com/500x325",
    },
    {
      title: "Card title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      imgSrc: "https://via.placeholder.com/500x325",
    },
    {
      title: "Card title 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      imgSrc: "https://via.placeholder.com/500x325",
    },
  ];

  return (
    <>

      <Navbar />
      <div className="container my-4">
        <Jumbotron />
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                imgSrc={card.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
  <div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
};

export default Home;