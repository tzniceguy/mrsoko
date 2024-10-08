import Image from "next/image";
import Steps from "./Step";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="h-full p-6 md:p-24 md:grid md:grid-cols-2">
      <div>
        <h3>
          Order Now, We Deliver! <br />
          Its that easy
        </h3>
        <div>
          <Image src="/grocery.png" width={500} height={500} alt="grocery" />
        </div>
      </div>
      <div>
        <div>
          <p className="leading-7">
            time is precious, and we are hear to help you save it. Order your
            groceries online and we will deliver them to your doorstep. with our
            seamless ordering process you can skip the hassle and focus on what
            really matters. Whether it is nourishing your body, enriching your
            mind or simply treating yourself its just few taps away. order now
            and let us take care of the rest
          </p>
        </div>
        <div>
          <Steps
            id={1}
            title="Place your Order"
            description="select your item from our catalogue"
          />
          <Steps
            id={2}
            title="Picking and Packing"
            description="your order is been worked as soon as it is recieved"
          />
          <Steps
            id={3}
            title="Delivered to your door"
            description="your order is delivered to you in a timely manner"
          />
          <div>
            <Link href="/" className="text-sky-400 underline font-semibold">
              <span>click here to order</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
