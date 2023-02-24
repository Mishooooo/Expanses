import "./Card.css";

const Card = function (props) {
  const classes = "Card " + 'expenses';
  return <div className={classes}>{props.children}</div>;
};

export default Card;
