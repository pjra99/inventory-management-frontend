export default function DropdownButton({
  placeholder,
  onChange,
  options,
  value,
}) {
  return (
    <select
      className="border-[1px] bg-transparent h-10 pl-4 w-full"
      value={value}
      onChange={onChange}
    >
      <option value="" disabled className="text-border">
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
