import Image from "next/image";

const menuItems = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
];

function Menu() {
    return (
        <div className="flex ">
            <aside className="w-64 bg-white min-h-screen py-18 ml-45">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item} className="flex items-center justify-between px-6 py-3 text-gray-900 hover:bg-gray-100 cursor-pointer">
                            <span>{item}</span>

                        </li>
                    ))}
                </ul>
            </aside>


            <div className="flex-1 mt-20 ml-30">
                <Image
                    src="/Images/iphone.jpg"
                    alt="Home page image"
                    width={800}
                    height={500}

                />
            </div>

        </div>
    );
}

export default Menu;