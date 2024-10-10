import Input from "./Input";
import MessageBox from "./Messagebox";
import Messagebox from "./Messagebox";
export default function Contact() {
  return (
    <div className="h-screen p-6">
      <h1 className="text-2xl text-center md:text-4xl">
        Do you still have questions? Reach out to us for futher assistance we
        are here to help
      </h1>
      <div className="md:grid md:grid-cols-2">
        <div className="">
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
        </div>
      </div>
    </div>
  );
}
