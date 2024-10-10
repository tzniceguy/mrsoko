interface InputProps {
  placeholder: string;
  type: string;
}

export default function Input({ placeholder, type }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none rounded w-full p-2"
    />
  );
}
