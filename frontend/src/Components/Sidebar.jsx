import React from 'react';

const Sidebar = ({ categories }) => {
    return (
        <aside className="w-[220px] py-6 border-r border-gray-200 max-lg:hidden">
            <ul className="list-none p-0 m-0">
                {categories.map((category, index) => (
                    <li key={index} className="mb-4">
                        <a
                            href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
                            className="flex justify-between items-center text-black no-underline text-base transition-colors py-1 hover:text-primary"
                        >
                            {category}
                            {(category === "Woman's Fashion" || category === "Men's Fashion") && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
