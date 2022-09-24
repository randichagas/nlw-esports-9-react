export function ListItem(props) {
  return (
    <li>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt={props.alt} />
      </a>
    </li>
  );
}
