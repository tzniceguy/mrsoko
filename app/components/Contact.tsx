import Input from "./Input";
import MessageBox from "./Messagebox";

export default function Contact() {
  return (
    <div className="h-screen p-6">
      <h1 className="text-2xl md:text-4xl">
        Do you still have questions? Reach out to us for futher assistance we
        are here to help
      </h1>
      <div className="md:grid md:grid-cols-2 gap-8">
        <div className="h-full">
          <div className="block">
            <label>Your Name</label>
            <Input type="name" placeholder="name" />
          </div>
          <div className="block">
            <label>Your email</label>
            <Input type="name" placeholder="email" />
          </div>
          <div>
            <label>Message</label>
            <MessageBox />
          </div>
          <button className="p-2 bg-orange-400 rounded text-black">
            Send Message
          </button>
        </div>
        <div>
          <div></div>
          <div className="space-y-5">
            <h3>Lubaga, Shinyanga</h3>
            <h3>Phone: +255 777 777 777</h3>
            <h3>Email:mrsoko@mrsoko.app</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
