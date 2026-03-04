import { ArrowRight } from "lucide-react"

const StepCard = ({ number, text }: { number: number; text: string }) => (
	<div className='bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start h-full min-h-[200px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
		<div className='w-8 h-8 rounded-full bg-gradient-to-br from-black to-gray-800 text-white flex items-center justify-center font-bold text-sm mb-6 shadow-lg shadow-black/20'>
			{number}
		</div>
		<p className='text-gray-600 font-medium leading-relaxed text-sm'>{text}</p>
	</div>
)

const Onboarding = () => {
	return (
		<section id='onboarding' className='py-24 lg:py-40 bg-white'>
			<div className='container mx-auto px-4 md:px-32'>
				<div className='max-w-3xl mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 text-balance'>
						Подключение за 24 часа
					</h2>
					<p className='text-lg text-gray-500 mb-6 max-w-xl'>
						Никаких сложных договоров. Начните принимать платежи уже сегодня.
					</p>
					<a
						href='#'
						className='group inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors border-b border-gray-900 hover:border-blue-600 pb-0.5'
					>
						Оставить заявку
                        <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
					</a>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
					<StepCard number={1} text='Заполните заявку — это займёт 2 минуты' />
					<StepCard number={2} text='Мы проверим данные и свяжемся в течение 24 часов' />
					<StepCard number={3} text='Настройте приложение или получите QR-терминал' />
					<StepCard number={4} text='Начните принимать оплату в тот же день' />
				</div>

				<button className='bg-black hover:bg-gray-800 text-white pl-6 pr-4 py-3 rounded-lg text-base font-bold transition-all flex items-center gap-2 group'>
					Начать бесплатно
					<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
				</button>
			</div>
		</section>
	)
}

export default Onboarding
