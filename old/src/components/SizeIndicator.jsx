function SizeIndicator() {
  return (
    <div className="*:hidden">
      <div className="max-sm:block">sm</div>
      <div className="sm:max-md:block">md</div>
      <div className="md:max-lg:block">lg</div>
      <div className="lg:max-xl:block">xl</div>
    </div>
  );
}

export default SizeIndicator;
