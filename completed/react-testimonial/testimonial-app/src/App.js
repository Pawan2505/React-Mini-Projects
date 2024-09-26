import "./App.css";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  const testimonials = [
    {
      name: "Pawan Maurya",
      message: "This service is fantastic! I am very happy with the results.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Manish Mishra",
      message: "This service is fantastic! I am very happy with the results.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Vivek Mishra",
      message: "This service is fantastic! I am very happy with the results.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Saurabh",
      message: "This service is fantastic! I am very happy with the results.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Aryan",
      message: "This service is fantastic! I am very happy with the results.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="App">
      <h1>Customer Testimonials</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            message={testimonial.message}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
