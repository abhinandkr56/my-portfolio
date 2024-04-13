const Header = () => {
    return (
        <div className="flex flex-nowrap justify-between">
            <h2 className="p-4 font-extralight">Abhinandhu K R</h2>
            <ul className="flex space-x-4 p-4">
                <li className="text-gray-400 hover:text-white px-3 rounded-md">Home</li>
                <li className="text-gray-400 hover:text-white px-3 rounded-md">Portfolio</li>
                <li className="text-gray-400 hover:text-white px-3 rounded-md">Contact</li>
            </ul>
        </div>
    )
}

export default Header;