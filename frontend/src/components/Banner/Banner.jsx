export function Bunner({ src }) {
  return (
    <div className="banner">
      <img src={src} className="img-fluid img-banner" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}
