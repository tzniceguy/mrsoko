export default function Hero() {
  return (
    <div
      className="bg-no-repeat bg-gradient-to-br from-sky-400 to indigo-350"
      style={{ backgroundImage: "url('/hero-section-unsplash.jpg')" }}
    >
      <div className="p-6 md:pl-12 h-screen">
        <div className="box-border justify-center items-center my-36">
          <h2 className="text-2xl md:text-5xl font-semibold">
            Too busy to shop?
            <br />
            Let us deliver it to your Door!
          </h2>
          <p className="text-lg">
            let us take care of your grocery ashopping while you focus on what
            matters most
          </p>
          <button className="bg-orange-500 text-black px-4 py-2 rounded-lg my-8">
            Follow our whatsapp channel
          </button>
        </div>
      </div>
    </div>
  );
}
