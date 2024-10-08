interface StepsProps {
  id: number;
  title: string;
  description: string;
}

export default function Steps({ id, title, description }: StepsProps) {
  return (
    <div className="flex flex-col mt-4 gap-1">
      <div className="bg-orange-300 rounded-full w-8  text-center">
        <div className="flex items-center justify-center h-full w-full">
          <span className="text-xl rounded">{id}</span>
        </div>
      </div>
      <span>{title}</span>
      <p>{description}</p>
    </div>
  );
}
