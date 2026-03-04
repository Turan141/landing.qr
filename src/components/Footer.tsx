import { ArrowRight } from "lucide-react"

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
	<div>
		<h4 className='font-bold text-gray-500 text-xs tracking-wider uppercase mb-6'>
			{title}
		</h4>
		<ul className='space-y-4'>
			{links.map((link, index) => (
				<li key={index}>
					<a
						href='#'
						className='text-gray-400 hover:text-white transition-colors text-sm font-medium'
					>
						{link}
					</a>
				</li>
			))}
		</ul>
	</div>
)

const Footer = () => {
	return (
		<footer className='bg-[#0A0A0A] text-white overflow-hidden'>
			{/* CTA Section */}
			<div className='border-b border-white/10'>
				<div className='container mx-auto px-4 md:px-6 py-20 lg:py-24'>
					<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
						<div className='max-w-xl'>
							<h2 className='text-3xl md:text-4xl font-bold text-white leading-tight'>
								Готовы принимать платежи <br />
								по-новому?
							</h2>
						</div>
						<div>
							<a
								href='#'
								className='text-white text-lg font-bold hover:text-gray-300 transition-colors flex items-center gap-2 group border-b border-white pb-0.5'
							>
								Начать бесплатно
								<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Links Section */}
			<div className='container mx-auto px-4 md:px-6 py-16 lg:py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 mb-20'>
					{/* Logo Column */}
					<div className='lg:col-span-2'>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold text-lg'></div>
							<div className='flex flex-col'>
								<span className='text-xl font-bold text-white leading-none'>
									Smart POS
								</span>
								<span className='text-[10px] text-gray-500 uppercase tracking-widest mt-0.5'>
									from IMPAYA
								</span>
							</div>
						</div>
						<p className='text-gray-500 text-sm leading-relaxed max-w-xs'>
							Платёжный сервис нового поколения для офлайн-бизнеса.
						</p>
					</div>

					{/* Links Columns */}
					<div className='lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8'>
						<FooterColumn
							title='ПРОДУКТ'
							links={["О сервисе", "Как работает", "Тарифы", "Поддержка"]}
						/>
						<FooterColumn title='КОМПАНИЯ' links={["О нас", "Карьера", "Блог"]} />
						<FooterColumn
							title='ПРАВОВАЯ ИНФОРМАЦИЯ'
							links={["Условия использования", "Политика конфиденциальности", "PCI DSS"]}
						/>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600'>
					<p>© 2026 QRPay. Все права защищены.</p>
					<p>QRPay Ltd. Рег. №12345678</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
