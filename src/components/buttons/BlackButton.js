export default function BlackButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-secondary text-white px-4 py-2 rounded w-full h-full"
    >
      {props.name}
    </button>
  );
}
