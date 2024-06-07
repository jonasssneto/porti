export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className=" text-white py-4 absolute bottom-0 w-full">
        <div className="h-full w-full flex justify-center">
          <p className="text-gray-500 mb-4 text-lg">&copy; {year} por @jonasssneto</p>
        </div>
      </footer>
    </>
  );
};
