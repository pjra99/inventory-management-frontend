export default function DropdownButton({
  placeholder,
  onChange,
  className,
  options,
  value,
  values
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
        <option key={index} value={values? values[index]:option}>
          {option[0].toUpperCase()+option.substring(1)}
        </option>
      ))}
    </select>
  );
}
