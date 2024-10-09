import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div className="h-screen p-6">
      <h1 className="text-2xl md:text-4xl">
        We have served others, are you next?
      </h1>
      <div className="md:grid md:grid-cols-3 gap-3">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
}
