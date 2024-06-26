'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
const TopNav = () => {
  const pathname = usePathname();
	const menuItems = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Portfolio',
			link: '/portfolio',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	];
  console.log(pathname);
	const [activeMenuItem, setActiveMenuItem] = useState(pathname.substring(1) || 'home');
	return (
		<nav className='hidden lg:flex justify-center lg:space-x-4 lg:py-2'>
			{menuItems.map((menuItem, index) => (
				<a
					key={index}
					href={menuItem.link}
					className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 ${
						activeMenuItem === menuItem.name.toLowerCase() ? 'bg-gray-100' : ''
					}`}
					aria-current='page'
					onClick={() => setActiveMenuItem(menuItem.name)}>
					{menuItem.name}
				</a>
			))}
		</nav>
	);
};

export default TopNav;
