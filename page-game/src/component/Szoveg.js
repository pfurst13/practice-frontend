export default function Szoveg(props) {
    return(
        <>
          <label>Oldal szöveg</label>
          <textarea rows="5" cols="33" onChange={props.onChange}></textarea>
        </>
    )
}