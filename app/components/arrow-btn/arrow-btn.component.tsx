type ArrowBtnProps = {
	text: string;
};
const ArrowBtn = ({ text }: ArrowBtnProps) => {
	return (
		<button className='flex-shrink-0 inline-flex gap-2 items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'>
			{text}
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
					d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
				/>
			</svg>
		</button>
	);
};

export default ArrowBtn;
