import React, { useState, useEffect } from "react"

const Header = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled)
			}
		}

		document.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scrolled])

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20"
					: "bg-transparent py-6"
			}`}
		>
			<div
				className={`container mx-auto px-4 md:px-6 transition-all duration-300 flex items-center justify-between ${scrolled ? "h-16" : "h-20"}`}
			>
				<div className='flex items-center gap-3'>
					<div className='w-10 h-10 bg-[#4CAF50] rounded flex items-center justify-center text-white font-bold text-lg'>
						QR
					</div>
					<div className='flex flex-col'>
						<span className='text-xl font-bold text-white leading-none tracking-wide'>
							<span className='text-[#3B82F6]'>Smart</span> POS
						</span>
						<span className='text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 font-medium'>
							from IMPAYA
						</span>
					</div>
				</div>

				<nav className='hidden md:flex items-center gap-8'>
					<a
						href='#about'
						className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
					>
						О сервисе
					</a>
					<a
						href='#how-it-works'
						className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
					>
						Как это работает
					</a>
					<a
						href='#onboarding'
						className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
					>
						Подключение
					</a>
					<a
						href='#contact'
						className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
					>
						Контакт
					</a>
				</nav>

				<div className='flex items-center gap-6'>
					<button className='text-sm font-bold text-gray-300 hover:text-white transition-colors hidden sm:block'>
						Войти
					</button>
					<button className='bg-[#0066FF] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20'>
						Начать бесплатно
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
