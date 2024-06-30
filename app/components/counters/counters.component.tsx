const Counters = () => {
	return (
		<div className='flex gap-x-12 items-start !mt-12'>
			<div className='inline-flex flex-col gap-y-2 w-24 items-center justify-center'>
				<p className='text-4xl font-bold text-slate-700'>10+</p>
				<p className='text-md text-slate-700 text-center'>Years Of Experience</p>
			</div>
			<div className='inline-flex flex-col gap-y-2 w-24 items-center justify-center'>
				<p className='text-4xl font-bold text-slate-700'>120+</p>
				<p className='text-md text-slate-700 text-center'>Successful Projects</p>
			</div>
			<div className='inline-flex flex-col gap-y-2 w-24 items-center justify-center'>
				<p className='text-4xl font-bold text-slate-700'>90+</p>
				<p className='text-md text-slate-700 text-center'>Happy Clients</p>
			</div>
		</div>
	);
};

export default Counters;
