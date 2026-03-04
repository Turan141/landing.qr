import { useState, useEffect } from "react"

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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-200"
					: "bg-transparent py-6"
			}`}
		>
			<div
				className={`container mx-auto px-4 md:px-6 transition-all duration-500 flex items-center justify-between ${scrolled ? "h-16" : "h-20"}`}
			>
				<div className='flex items-center gap-3 group cursor-pointer'>
					<div className='w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300'>
						QR
					</div>
					<div className='flex flex-col'>
						<span
							className={`text-xl font-bold leading-none tracking-wide transition-colors ${scrolled ? "text-gray-900 group-hover:text-black" : "text-white group-hover:text-gray-100"}`}
						>
							<span className='text-blue-500'>Smart</span> POS
						</span>
						<span
							className={`text-[10px] uppercase tracking-widest mt-0.5 font-medium transition-colors ${scrolled ? "text-gray-500" : "text-white/50"}`}
						>
							from IMPAYA
						</span>
					</div>
				</div>

				<nav
					className={`hidden md:flex items-center gap-1 md:gap-2 px-2 py-1.5 transition-colors duration-500 max-w-fit mx-auto`}
				>
					<a
						href='#about'
						className={`text-sm font-medium px-4 py-2 transition-all duration-300 ${scrolled ? "text-gray-600 rounded-full hover:text-gray-900 hover:bg-white hover:shadow" : "text-white/70 hover:text-white hover:bg-white/10"}`}
					>
						О сервисе
					</a>
					<a
						href='#how-it-works'
						className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${scrolled ? "text-gray-600 rounded-full hover:text-gray-900 hover:bg-white hover:shadow" : "text-white/70 hover:text-white hover:bg-white/10"}`}
					>
						Как это работает
					</a>
					<a
						href='#onboarding'
						className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${scrolled ? "text-gray-600 rounded-full hover:text-gray-900 hover:bg-white hover:shadow" : "text-white/70 hover:text-white hover:bg-white/10"}`}
					>
						Подключение
					</a>
					<a
						href='#contact'
						className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${scrolled ? "text-gray-600 rounded-full hover:text-gray-900 hover:bg-white hover:shadow" : "text-white/70 hover:text-white hover:bg-white/10"}`}
					>
						Контакт
					</a>
				</nav>

				<div className='flex items-center gap-4'>
					<button
						className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 hidden sm:block ${scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white/70 hover:text-white hover:bg-white/10"}`}
					>
						Войти
					</button>
					<button className='bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300'>
						Начать бесплатно
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
