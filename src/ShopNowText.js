export default function ShopNowText({ title, linkAlignment }) {
  return (
    <div>
      <h3 className="text-4xl font-mouse font-semibold tracking-wider">
        {title}
      </h3>
      <a className={`text-link underline ${linkAlignment}`}>
        SHOP NOW
      </a>
    </div>
  );
}
