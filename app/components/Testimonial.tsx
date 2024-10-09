import Image from "next/image";

export default function Testimonial() {
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
          <span className="text-center block">John Doe</span>
          <span>ratings</span>
        </div>
      </div>
      <div>
        <p>
          loreum ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
