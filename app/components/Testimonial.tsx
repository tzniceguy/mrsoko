import Image from "next/image";

interface TestimonialProps {
  name: string;
  rating: number;
  testimonial: string;
  image: string;
}

export default function Testimonial({
  name,
  rating,
  image,
  testimonial,
}: TestimonialProps) {
  return (
    <div className="rounded-lg border border-sky-100 p-4 shadow-lg bg-white my-2 h-full">
      <div className="flex items-center border-b border-sky-100 pb-4 mb-4">
        <div className="p-2">
          <Image
            src={image}
            alt="testimonial"
            width={65}
            height={65}
            className="rounded-full border-2 border-sky-100"
          />
        </div>
        <div className="ml-4">
          <span className="block text-lg font-semibold text-gray-700">
            {name}
          </span>
          <span className="block text-yellow-500">
            {"⭐️".repeat(rating)}{" "}
            <span className="text-gray-500">({rating}/5)</span>
          </span>
        </div>
      </div>
      <div>
        <p className="text-gray-700 leading-6">{testimonial}</p>
      </div>
    </div>
  );
}
