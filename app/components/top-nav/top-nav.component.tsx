'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../logo/logo.component';
import ArrowBtn from '../arrow-btn/arrow-btn.component';

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
	const [activeMenuItem, setActiveMenuItem] = useState(
		pathname.substring(1) || 'home'
	);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const handleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	return (
		<>
			<nav
				className={`hidden lg:flex justify-center lg:space-x-4 lg:py-2 relative`}>
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
				<div className="hidden absolute top-0 right-0 lg:flex">
				<ArrowBtn text="Book Call" />
				</div>
			</nav>
			<div className='lg:hidden flex justify-end w-full'>
				<button
					className='lg:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
					aria-controls='mobile-menu'
					aria-expanded='false'
					onClick={handleMobileMenu}>
					<span className='absolute -inset-0.5'></span>
					<span className='sr-only'>Open menu</span>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</div>

			<nav className="lg:hidden" aria-label='Global' id='mobile-menu'>
				<div
					className={`space-y-1 px-2  overflow-hidden transition-all	 ease-in-out ${
						mobileMenuOpen ? 'h-full pb-3 pt-2' : 'h-0'
					}`}>
					{menuItems.map((menuItem, index) => (
						<a
							key={index}
							href={menuItem.link}
							className={`block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 ${
								activeMenuItem === menuItem.name.toLowerCase() ? 'bg-gray-100' : ''
							}`}
							aria-current='page'
							onClick={() => setActiveMenuItem(menuItem.name)}>
							{menuItem.name}
						</a>
					))}
				</div>
			</nav>
		</>
	);
};

export default TopNav;
