import ArrowBtn from '../arrow-btn/arrow-btn.component';
import { abrilFatface } from '@/app/fonts/fonts';
import RecentProjectsList from '../recent-projects-list/recent-projects-list';
const RecentSection = () => {
	return (
		<section className='flex flex-col gap-12'>
			<div className='space-y-4'>
				<h2
					className={`${abrilFatface.className} text-3xl text-slate-700 font-thin`}>
					Recent Projects
				</h2>
				<div className='w-full lg:w-1/2 xl:w-1/3'>
					<p className='text-lg'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, alias
						error.
					</p>
				</div>
				{/* <div className='w-full flex justify-start items-start'>
					<ArrowBtn text='Learn More' />
				</div> */}
			</div>
			<div className='w-full flex gap-9'>
				<RecentProjectsList />
			</div>
		</section>
	);
};

export default RecentSection;
