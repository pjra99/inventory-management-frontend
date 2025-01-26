export default function Margin(props) {
  const half = props.width / 2;
  return (
    <div className={`w-[${props.width}] flex justify-between`}>
      <div
        className={`border-b-[1px] h-3 ${
          props.text.length == 0 ? `w-1/2 ` : `w-[calc(50%-20px)]`
        }`}
      ></div>
      <div className={props.text.length == 0 ? `w-0` : `w-[4px]`}>
        {props.text}
      </div>
      <div
        className={`border-b-[1px] h-3  ${
          props.text.length == 0 ? `w-1/2 ` : `w-[calc(50%-20px)]`
        }`}
      ></div>
    </div>
  );
}
