function Tab({ title, active, onClick }) {
  return (
    <div
      className={`flex justify-center text-center cursor-pointer text-gray-600 border-b ${
        active ? 'border-softRed' : ''
      } md:border-b-0 hover:text-softRed md:w-1/3`}
      onClick={onClick}
    >
      <div className={`py-5 ${active ? 'border-b-4 border-softRed' : ''}`}>
        {title}
      </div>
    </div>
  );
}

export default Tab;
