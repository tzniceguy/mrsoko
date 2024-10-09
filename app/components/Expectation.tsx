interface Expectationprops {
  title: string;
  description: string;
}

export default function Expectation({ title, description }: Expectationprops) {
  return (
    <div className="my-8">
      <h1 className="text-sky-500 font-bold ">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
