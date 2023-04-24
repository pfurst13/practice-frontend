export default function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" onChange={props.onChange}/>
    </div>
  );
}
