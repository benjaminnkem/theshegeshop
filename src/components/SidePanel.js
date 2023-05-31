const SidePanel = ({allItems}) => {
  return (
    <div id="side__panel">
      <div>
        <h3
          style={{
            borderBottom: "1px rgba(139, 139, 139, 0.552) solid",
            padding: "10px 0",
          }}
        >
          Items In Cart
        </h3>

        <div>
          {allItems.length < 1 && <div><p>No Items added</p></div>}
          {allItems.length >= 1 && allItems.map((item) => {
            return (
              <div className="__item__in__cart" key={item.id}>
                <div className="__item__in__cart__pre">
                  <p>{item.itemName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
