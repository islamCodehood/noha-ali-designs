import { abrilFatface } from '@/app/fonts/fonts';
const Logo = () => {
  return (
    <div className={`absolute shrink-0 flex items-center pr-6 gap-1 ${abrilFatface.className}`}>
      <span className='text-2xl text-cyan-700 font-medium'>Noha Ali</span>
      <span className='text-lg text-slate-600 mt-1'>Designs</span>
    </div>
  );
}

export default Logo;