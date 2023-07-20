export function ProductCell({sku, manufacturer, color, material, season, reason}) {
  return (
    <table className="table table-bordered">
    <tbody>
      {sku && (
        <tr>
          <td>Артикул</td>
          <td>{sku}</td>
        </tr>
      )}
      {manufacturer && (
        <tr>
          <td>Производитель</td>
          <td>{manufacturer}</td>
        </tr>
      )}
      {color && (
        <tr>
          <td>Цвет</td>
          <td>{color}</td>
        </tr>
      )}
      {material && (
        <tr>
          <td>Материалы</td>
          <td>{material}</td>
        </tr>
      )}
      {season && (
        <tr>
          <td>Сезон</td>
          <td>{season}</td>
        </tr>
      )}
      {reason && (
        <tr>
          <td>Повод</td>
          <td>{reason}</td>
        </tr>
      )}
    </tbody>
  </table>
  );
}
