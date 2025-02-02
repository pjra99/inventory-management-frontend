export default function InputField(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="border-[1px] bg-transparent h-10 pl-4 w-full"
    />
  );
}
