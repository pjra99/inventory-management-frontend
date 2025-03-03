export default function InputField({type, placeholder, value, onChange, className}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-[1px] bg-transparent h-10 pl-4 w-full ${className}`}
    />
  );
}
