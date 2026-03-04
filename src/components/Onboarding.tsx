import { ArrowRight } from "lucide-react"

const StepCard = ({ number, text }: { number: number; text: string }) => (
	<div className='bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col items-start h-full min-h-[220px] hover:shadow-xl hover:-translate-y-2 hover:border-indigo-100 transition-all duration-500 group'>
		<div className='w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300'>
			{number}
		</div>
		<p className='text-gray-700 font-medium leading-relaxed'>{text}</p>
	</div>
)

const Onboarding = () => {
	return (
		<section id='onboarding' className='py-24 lg:py-40 bg-white relative'>
			<div className='container mx-auto px-4 md:px-32 relative z-10'>
				<div className='max-w-3xl mb-16'>
					<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6'>
						<span className='text-sm font-semibold text-indigo-600 uppercase tracking-wider'>
							🚀 Быстрый старт
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-gray-900 text-balance leading-[1.1]'>
						Подключение <br className='hidden md:block' />
						за 24 часа
					</h2>
					<p className='text-lg text-gray-500 mb-8 max-w-xl font-medium'>
						Никаких сложных договоров. Начните принимать платежи уже сегодня.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative'>
					{/* Subtle connecting line behind cards for desktop */}
					<div className='hidden lg:block absolute top-[50px] left-0 w-full h-[2px] bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 -z-10'></div>

					<StepCard
						number={1}
						text='Заполните короткую онлайн-заявку — это займёт не более 2 минут.'
					/>
					<StepCard
						number={2}
						text='Мы проверим ваши данные и свяжемся в течение 24 часов.'
					/>
					<StepCard
						number={3}
						text='Настройте мобильное приложение или получите физический QR-терминал.'
					/>
					<StepCard
						number={4}
						text='Всё готово! Начните принимать оплату от клиентов в тот же день.'
					/>
				</div>

				<button className='bg-gray-900 hover:bg-black text-white pl-8 pr-6 py-4 rounded-full text-base font-bold shadow-xl shadow-gray-900/20 transition-all flex items-center gap-3 group hover:-translate-y-1'>
					Начать пользоваться бесплатно
					<div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors'>
						<ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' />
					</div>
				</button>
			</div>
		</section>
	)
}

export default Onboarding
