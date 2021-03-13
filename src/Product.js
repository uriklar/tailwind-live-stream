export default function Product() {
  return (
    <div className="flex flex-col gap-5">
      <img src="https://pet.oceanwp.org/wp-content/uploads/2016/08/4327767518565_2048x-300x300.jpg" />
      <div className="text-center">
        <div className="text-xs text-gray-400 italic">Pet</div>
        <div className="text-sm font-semibold text-gray-800">
          Mauris malesuada odio
        </div>
      </div>

      <div className="text-center text-lg text-green-600">£34.90</div>
    </div>
  );
}
