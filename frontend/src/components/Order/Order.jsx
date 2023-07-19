export function Order({ submitOrder, handleChange, phone, address }) {
  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div
        className="card card_order"
        style={{ maxWidth: 30 + 'rem', margin: 0 + 'auto' }}
      >
        <form className="card-body" onSubmit={submitOrder}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Ваш телефон"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              name="address"
              id="address"
              placeholder="Адрес доставки"
              value={address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              required
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}
