export default function Service({ title, desc, i }) {
  return (
    <div className="text-center flex justify-center flex-col gap-3">
      <img src={`/service-${i}.svg`} alt={title} className="h-24" />
      <h3 className="text-small-title">{title}</h3>
      <p className="text-leading">{desc}</p>
    </div>
  );
}
