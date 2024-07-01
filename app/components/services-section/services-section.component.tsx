import ArrowBtn from '../arrow-btn/arrow-btn.component';
import { abrilFatface } from '@/app/fonts/fonts';
import ServicesList from '../services-list/services-list.component';

const ServicesSection = () => {
	return (
		<section className='flex flex-col items-center gap-12'>
			<div className='space-y-4 md:w-[650px] sm:w-full'>
				<h2
					className={`${abrilFatface.className} text-3xl text-slate-700 font-thin text-center`}>
					Our Services
				</h2>
				<div className=''>
					<p className='text-lg text-center'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, alias
						error. Illum eos ducimus mollitia dolor deserunt error! Ab esse enim
						animi!
					</p>
				</div>
			</div>
			<div className='w-full flex flex-col items-center gap-12 xl:px-24 2xl:px-56 '>
			<ServicesList />
			</div>
		</section>
	);
};

export default ServicesSection;
