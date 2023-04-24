export default function Cim(props) {
    return(
        <>
          <label>Oldal cím</label>
          <input type="text" onChange={props.onChange}/>
        </>
    )
}