const Feed = ({items, addItemToCart}) => {
  return (
    <div id="feed__">
      <div id="feed_content">
        <div id="market__place__con">
          {items.map((item) => {
            return (
              <div className="item__preview" key={item.id}>
                <div className="item__img">
                  <img
                    src={item.imgSrc}
                    alt={item.itemName + " Image"}
                    style={{width: "100%", objectFit: "cover"}}
                  />
                </div>
                <div className="item__info" style={{padding: "10px 0"}}>
                  <h3 className="item__name">{item.itemName}</h3>
                  <p className="item__desc">{item.desc}</p>
                  <p className="item__seller">
                    by <span className="main_item__seller">{item.seller}</span>
                  </p>
                </div>

                <div className="buy__actions">
                  <button title="Add" onClick={() => {
                    addItemToCart(item)
                  }}>+
                  </button>
                  <button title="Remove">-</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
