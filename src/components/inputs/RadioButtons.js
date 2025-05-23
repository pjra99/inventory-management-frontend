export default function RadioButtons({ name, values, onChange, value }) {
  // console.log(values);
  const inputs = values.map((key, index) => (
    <div key={index}>
      <label htmlFor={name} key={index + 1} className="text-border font-bold">
        {key}
      </label>
      <input
        className="ml-1"
        type="radio"
        key={index + 2}
        name={name}
        value={key}
        // checked={(key === "Stock" && value === true) || (key === "Unit" && value === false)}
        onChange={onChange}
      />
    </div>
  ));
  return (
    <div>
      <p className="text-border">{name}</p>
      <section className="lg:flex justify-between mt-[10px] pr-[20%]">
        {inputs}
      </section>
    </div>
  );
}
