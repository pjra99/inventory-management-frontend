export default function RadioButtons({ name, values, onChange, value }) {
  console.log(values);
  const inputs = values.map((value, index) => (
    <div key={index}>
      <label for={name} key={index + 1} className="text-border font-bold">
        {value}
      </label>
      <input
        className="ml-1"
        type="radio"
        key={index + 2}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  ));
  return (
    <div>
      <p className="text-border">{name}</p>
      <section className="flex justify-between mt-[10px] pr-[20%]">
        {inputs}
      </section>
    </div>
  );
}
