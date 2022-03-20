const Card = (props) => {
  const { cardObj } = props;

  const handleClick = () => {
    props.onClick(cardObj);
  }

  return (
    <div className={`card ${cardObj.className}`} onClick={handleClick}>
      <div></div>
      <h2>{cardObj.title}</h2>
    </div>
  )
}

export default Card;