import type { Metadata } from 'next';

import './globals.css';
import TopNav from './components/top-nav/top-nav.component';
import Logo from './components/logo/logo.component';
import { openSans } from './fonts/fonts';
import Footer from './components/footer/footer.component';

export const metadata: Metadata = {
	title: 'Noha Ali Designs',
	description: 'Noha Ali Designs',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${openSans.className} pt-3 md:pt-6 lg:pt-6`}>
				<div className='px-6 md:px-12 lg:px-16'>
					<header className=''>
						<Logo />
						<TopNav />
					</header>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
