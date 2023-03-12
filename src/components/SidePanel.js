import {useState} from "react";

const SidePanel = ({ allItems }) => {

  const [noItem, setNoItem] = useState(true);

  if(allItems.length > 0) {
    setNoItem(false);
  }

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
          {!noItem && allItems.map((item) => {
            return (
              <div className="__item__in__cart" key={item.id}>
                <div className="__item__in__cart__pre">
                  <p>{ item.itemName }</p>
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
