export default function InputField({type, placeholder, value, onChange, className}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min="0"
      className={`border-[1px] bg-transparent h-10 pl-4 ${className}`}
    />
  );
}
