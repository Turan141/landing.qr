import { ArrowRight, ArrowLeft } from "lucide-react"

const StepCard = ({
	number,
	title,
	description
}: {
	number: number
	title: string
	description: string
}) => (
	<div className='flex flex-col gap-6 group cursor-pointer'>
		<div className='relative aspect-[4/5] bg-[#111] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-[1.02]'>
			{/* Placeholder for video/image */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60'></div>
			<div className='absolute bottom-6 left-6 right-6'>
				<span className='text-white font-medium text-lg'>{title}</span>
			</div>
		</div>

		<div>
			<h3 className='text-xl font-bold mb-3 text-gray-900'>{title}</h3>
			<p className='text-gray-500 leading-relaxed text-sm'>{description}</p>
		</div>
	</div>
)

const StatCard = ({ value, label }: { value: string; label: string }) => (
	<div className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square transition-all hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] hover:border-white/10 duration-500'>
		<span className='text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
			{value}
		</span>
		<span className='text-gray-400 text-sm font-medium'>{label}</span>
	</div>
)

const HowTo = () => {
	return (
		<section id='how-it-works' className='py-24 lg:py-40 bg-white'>
			<div className='container mx-auto px-4 md:px-32'>
				{/* Header Section */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
					<div className='max-w-xl'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 text-balance'>
							Как это работает
						</h2>
						<p className='text-lg text-gray-500 mb-6'>
							Три простых шага. Быстрее, чем карточный терминал.
						</p>
						<a
							href='#'
							className='group inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors border-b border-gray-900 hover:border-blue-600 pb-0.5'
						>
							Начать сейчас
							<ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
						</a>
					</div>

					<div className='flex gap-4'>
						<button className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50'>
							<ArrowLeft className='w-5 h-5 text-gray-600' />
						</button>
						<button className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer'>
							<ArrowRight className='w-5 h-5 text-gray-600' />
						</button>
					</div>
				</div>

				{/* Steps Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-32'>
					<StepCard
						number={1}
						title='Введите сумму'
						description='Как на POS-терминале — введите сумму покупки. QR-код сгенерируется мгновенно.'
					/>
					<StepCard
						number={2}
						title='Покупатель сканирует'
						description='Наведите камеру телефона на экран. Приложения не нужны.'
					/>
					<StepCard
						number={3}
						title='Оплата в один клик'
						description='Выбор способа оплаты: карта, Apple Pay, Google Pay или PayPal.'
					/>
				</div>

				{/* Stats Grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
					<StatCard value='0 ₽' label='За оборудование' />
					<StatCard value='24ч' label='Подключение' />
					<StatCard value='1.2%' label='Комиссия' />
					<StatCard value='24/7' label='Поддержка' />
				</div>
			</div>
		</section>
	)
}

export default HowTo
