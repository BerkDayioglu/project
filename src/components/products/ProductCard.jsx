const ProductCard = ({ price, title, image, id }) => {
  console.log(price, title, id, image);
  return (
    <div className="card">
      <div className="price">
        <h1>{price}$</h1>
      </div>
      <img src={image} alt="" />
      <div className="card_over">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
