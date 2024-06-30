const RecentProjectsList = () => {
	return (
		<>
			<div className='w-full lg:w-1/2 xl:w-1/3 h-[450px] rounded-3xl border relative bg-cyan-700 hover:shadow-lg transition duration-300 hover:scale-[1.005] hover:cursor-pointer'></div>
			<div className='w-full hidden lg:inline-block lg:w-1/2 xl:w-1/3 h-[450px] rounded-3xl border relative bg-cyan-700 hover:shadow-lg transition duration-300 hover:scale-[1.005] hover:cursor-pointer'></div>
			<div className='w-full hidden xl:inline-block xl:w-1/3 h-[450px] rounded-3xl border relative bg-cyan-700 hover:shadow-lg transition duration-300 hover:scale-[1.005] hover:cursor-pointer'></div>
		</>
	);
};

export default RecentProjectsList;
