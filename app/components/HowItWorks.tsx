import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="h-full p-6 md:p-24 md:grid md:grid-cols-2">
      <div>
        <h3>
          Order Now, We Deliver! <br />
          Its that easy
        </h3>
        <div>
          <Image
            src="https://plus.unsplash.com/premium_vector-1723140884627-f4d73b6ef49f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="grocery"
          />
        </div>
      </div>
      <div>
        <div>
          <p>
            time is precious, and we are hear to help you save it. Order your
            groceries online and we will deliver them to your doorstep. with our
            seamless ordering process you can skip the hassle and focus on what
            really matters. Whether it is nourishing your body, enriching your
            mind or simply treating yourself its just few taps away. order now
            and let us take care of the rest
          </p>
        </div>
        <div className="gap-4">
          <div className="flex flex-col">
            <span>1</span>
            <span>Place your Order</span>
            <p>select your item from our catalogue</p>
          </div>
          <div className="flex flex-col">
            <span>2</span>
            <span>Picking and Packing</span>
            <p>your order is been worked as soon as it is recieved</p>
          </div>
          <div className="flex flex-col">
            <span>3</span>
            <span>Delivered to your door</span>
            <p>your order is delivered to you in a timely manner</p>
          </div>

          <span>click here to order</span>
        </div>
      </div>
    </div>
  );
}
