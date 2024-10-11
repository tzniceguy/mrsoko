import Testimonial from "./Testimonial";

interface TestimonialProps {
  name: string;
  rating: number;
  testimonial: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Jane Doe",
    rating: 4,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/avatar-female-svgrepo-com.svg",
  },
  {
    name: "John Doe",
    rating: 4,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/avatar-male-svgrepo-com .svg",
  },
  {
    name: "John Doe",
    rating: 4,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/avatar-male-svgrepo-com .svg",
  },
];

export default function Testimonials() {
  return (
    <div className="h-full p-6">
      <h1 className="text-2xl md:text-4xl">
        We have served others, are you next?
      </h1>
      <div className="md:grid md:grid-cols-3 gap-3">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            name={testimonial.name}
            rating={testimonial.rating}
            testimonial={testimonial.testimonial}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
}
