export default function DropdownButton({
  placeholder,
  onChange,
  options,
  value,
  className
}) {
  return (
    <select
      className={`border-[1px] bg-transparent h-10 pl-4  ${className}`}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled className="text-border">
        {placeholder}
      </option>
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {option[0].toUpperCase()+option.substring(1)}
        </option>
      ))}
    </select>
  );
}
