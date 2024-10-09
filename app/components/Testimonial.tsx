import Image from "next/image";

interface TestimonialProps {
  name: string;
  rating: number;
  testimonial: string;
}

export default function Testimonial({
  name,
  rating,
  testimonial,
}: TestimonialProps) {
  return (
    <div className="rounded border-2 border-cyan-100 p-2 h-full">
      <div className="flex border-2">
        <div className="p-2">
          <Image
            src="/images/testimonial.jpg"
            alt="testimonial"
            width={65}
            height={65}
            className="rounded-full border-2"
          />
        </div>
        <div className="text-center ">
          <span className="text-center block">{name}</span>
          <span>{rating}</span>
        </div>
      </div>
      <div>
        <p className="leading-6">{testimonial}</p>
      </div>
    </div>
  );
}
