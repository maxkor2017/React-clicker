export default function Counter({ count, plusCount }) {
  return (
    <section className="counter">
      <h2 className="counter__title">
        Click count: <span className="counter__value">{count}</span>
      </h2>
      <button className="counter__btn" onClick={plusCount}>
        CLICK ME
      </button>
    </section>
  );
}
