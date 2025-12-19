export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">FLIPR</h1>
      <ul className="flex gap-6 font-medium text-gray-700">
        <li className="hover:text-indigo-600 cursor-pointer">Home</li>
        <li className="hover:text-indigo-600 cursor-pointer">Projects</li>
        <li className="hover:text-indigo-600 cursor-pointer">Clients</li>
        <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
