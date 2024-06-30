import ArrowBtn from '../arrow-btn/arrow-btn.component';
import { abrilFatface } from '@/app/fonts/fonts';
import Counters from '../counters/counters.component';
const FirstSection = () => {
	return (
		<section className='flex flex-col items-center lg:items-start lg:flex-row-reverse lg:justify-between gap-12'>
			<div className='w-full lg:w-[450px] xl:w-[550px] 2xl:w-1/2 h-[450px] rounded-3xl border relative bg-cyan-700 shadow-lg flex-shrink-0'></div>
			<div className='space-y-4'>
				<h2
					className={`${abrilFatface.className} text-3xl text-slate-700 font-thin`}>
					We tailor interior styles to your unique taste
				</h2>
				<p className='text-lg'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, alias
					error. Consequuntur, dolor. Inventore, beatae? Illo natus nostrum quibusdam
					illum eos ducimus mollitia dolor deserunt error! Ab esse enim animi!
				</p>
				<div className='w-full flex justify-start items-start'>
					<ArrowBtn text='Learn More' />
				</div>
				<Counters />
			</div>
		</section>
	);
};

export default FirstSection;
