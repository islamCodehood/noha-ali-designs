import Image from 'next/image';
import { abrilFatface } from '@/app/fonts/fonts';
import HeroImage from '../components/hero-image/hero-image.component';
import FirstSection from '../components/first-section/first-section.component';
import ServicesSection from '../components/services-section/services-section.component';

export default function Home() {
	return (
		<>
			<div className='absolute auth-background w-full h-screen top-0 left-0 -z-10'></div>
			<main
				className={` flex min-h-screen flex-col items-center`}>
				<div className='w-full my-20'>
				<div className='mb-10'>
					<h1 className={`${abrilFatface.className} text-6xl text-slate-800 text-center`}>Discover Your Dream Interior</h1>
				</div>
					<HeroImage />
				</div>
				<div className="w-full my-20">
					<FirstSection />
				</div>
				<div className="w-full my-20">
					<ServicesSection />
				</div>
				{/* <img src="/images/logo.png" alt="logo" /> */}
				{/* <p className="text-stale-500 text-4xl">Coming soon</p> */}
			</main>
		</>
	);
}
