import Items from "../components/Items";
import SingleItem from "../components/SingleItem";

const Item = props => (
  <div>
    <p>Single Item showing up</p>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
