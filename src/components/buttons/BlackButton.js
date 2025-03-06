export default function BlackButton({name, onClick, className}) {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white px-4 py-2 ${className}`}
    >
      {name}
    </button>
  );
}
