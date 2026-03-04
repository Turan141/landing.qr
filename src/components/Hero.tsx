const Hero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image with Overlay */}
			<div 
				className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
				style={{ 
					backgroundImage: "url('https://qr-easy-pay.lovable.app/assets/qr-terminal-B7LBFqwk.jpg')",
				}}
			>
                {/* Dark Overlay gradient */}
				<div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
			</div>

			<div className='container mx-auto px-4 md:px-6 relative z-10 text-center pt-20'>
				<h1 className='text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight drop-shadow-lg'>
					Один QR — любая <br />
					оплата
				</h1>

				<p className='text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto drop-shadow-md'>
					Без оборудования. Без аренды. Без сложных настроек.
				</p>

				<div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
					<button className='bg-[#0066FF] hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20'>
						Начать бесплатно
					</button>
					<button className='bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-bold transition-all hover:border-white/40'>
						Связаться с нами
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
