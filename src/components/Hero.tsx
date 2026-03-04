const Hero = () => {
	return (
		<section className='relative min-h-screen flex flex-col justify-center overflow-hidden py-24'>
			{/* Background Image with Overlay */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]'
				style={{
					backgroundImage:
						"url('https://qr-easy-pay.lovable.app/assets/qr-terminal-B7LBFqwk.jpg')"
				}}
			>
				{/* Dark Overlay gradient */}
				<div className='absolute inset-0 bg-black/50 bg-gradient-to-b from-black/80 via-black/20 to-black/80'></div>
			</div>

			<div className='container mx-auto px-4 md:px-6 relative z-10 text-center mt-12 md:mt-20'>
				<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 hover:bg-white/20 transition-colors cursor-pointer'>
					<span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
					<span className='text-xs md:text-sm font-medium text-white/90'>
						Доступно для бизнеса любого размера
					</span>
				</div>

				<h1 className='text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 max-w-6xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-sm'>
					Один QR — любая <br className='hidden md:block' />
					оплата
				</h1>

				<p className='text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed'>
					Без оборудования. Без аренды.{" "}
					<span className='text-white'>Без сложных настроек.</span>
				</p>

				<div className='flex flex-col sm:flex-row gap-4 w-full justify-center items-center'>
					<button className='group relative bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-blue-500 hover:scale-105 overflow-hidden w-full sm:w-auto'>
						<div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
						<span className='relative z-10 flex items-center justify-center gap-2'>
							Начать бесплатно
							<svg
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='group-hover:translate-x-1 transition-transform'
							>
								<path
									d='M5 12H19M19 12L12 5M19 12L12 19'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</span>
					</button>
					<button className='bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md px-8 py-4 rounded-2xl text-lg font-medium transition-all hover:border-white/30 w-full sm:w-auto'>
						Связаться с нами
					</button>
				</div>

				{/* Floating trusted by */}
				<div className='mt-16 md:mt-24 pt-8 md:pt-10 border-t border-white/10 max-w-4xl mx-auto'>
					<p className='text-xs font-semibold tracking-widest text-white/40 uppercase mb-6'>
						Нам доверяют современные компании
					</p>
					<div className='flex flex-wrap justify-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700'>
						{/* Fake logos using text for demo purposes replacing with polished SVGs later if needed */}
						<div className='text-lg md:text-xl font-bold text-white flex items-center gap-2'>
							<div className='w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20' /> Acme Corp
						</div>
						<div className='text-lg md:text-xl font-bold text-white flex items-center gap-2'>
							<div className='w-5 h-5 md:w-6 md:h-6 bg-white/20 rotate-45' /> Globex
						</div>
						<div className='text-lg md:text-xl font-bold text-white flex items-center gap-2'>
							<div className='w-5 h-5 md:w-6 md:h-6 rounded-sm bg-white/20' /> Soylent
						</div>
					</div>
				</div>
			</div>

			{/* Glowing orb behind text */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none'></div>
		</section>
	)
}

export default Hero
