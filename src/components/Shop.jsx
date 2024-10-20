import lock from "../assets/lock.png";

export default function Shop({ count, boost, setBoost, minusCount }) {
  const shopItems = [
    { title: "+3 per click", boost: 3, price: 10, id: 1 },
    { title: "+10 per click", boost: 10, price: 50, id: 2 },
    { title: "+50 per click", boost: 50, price: 100, id: 3 },
  ];
  return (
    <section className="shop">
      {shopItems.map((item) => (
        <div
          className={
            boost >= item.boost
              ? "shop__item shop__item-abled"
              : count < item.price
              ? "shop__item shop__item-disabled"
              : "shop__item"
          }
          key={item.id}
        >
          <div className="shop__left">
            <img src={lock} alt="" className="shop__icon" />
            <h3 className="shop__title">{item.title}</h3>
          </div>
          <div className="shop__right">
            <p className="shop__price">{item.price}</p>
            <button
              className="shop__btn"
              onClick={() => {
                setBoost(item.boost);
                minusCount(item.price);
              }}
            >
              BUY
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
