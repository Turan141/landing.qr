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
		<div className='relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-gray-200/50'>
			{/* Fake interface sketch inside the card for professional feel */}
			<div className='absolute inset-4 bg-white rounded-2xl shadow-sm border border-gray-100 opacity-60 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-100'>
				<div className='w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-500 font-bold text-xl'>
					{number}
				</div>
				<div className='w-full h-2 bg-gray-100 rounded-full mb-2'></div>
				<div className='w-2/3 h-2 bg-gray-100 rounded-full'></div>
			</div>

			<div className='absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90'></div>
			<div className='absolute bottom-6 left-6 right-6 flex items-center gap-3'>
				<div className='w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-sm border border-white/30'>
					{number}
				</div>
				<span className='text-white font-semibold text-lg'>{title}</span>
			</div>
		</div>

		<div className='px-2'>
			<h3 className='text-xl font-bold mb-3 text-gray-900 transition-colors group-hover:text-blue-600'>
				{title}
			</h3>
			<p className='text-gray-500 leading-relaxed text-sm font-medium'>{description}</p>
		</div>
	</div>
)

const StatCard = ({ value, label }: { value: string; label: string }) => (
	<div className='bg-white border border-gray-100 shadow-sm p-8 rounded-3xl flex flex-col items-center justify-center text-center aspect-square transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-50 duration-500 relative overflow-hidden group'>
		{/* Subtle background glow on hover */}
		<div className='absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-colors duration-500'></div>

		<span className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 relative z-10'>
			{value}
		</span>
		<span className='text-gray-500 text-sm font-bold uppercase tracking-wider relative z-10'>
			{label}
		</span>
	</div>
)

const HowTo = () => {
	return (
		<section
			id='how-it-works'
			className='py-24 lg:py-40 bg-[#FAFAFA] border-y border-gray-100'
		>
			<div className='container mx-auto px-4 md:px-32'>
				{/* Header Section */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8'>
					<div className='max-w-xl'>
						<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-6'>
							<span className='text-sm font-semibold text-green-600 uppercase tracking-wider'>
								⚡️ Процесс
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-gray-900 text-balance leading-[1.1]'>
							Как это работает
						</h2>
						<p className='text-lg text-gray-500 mb-8 font-medium'>
							Три простых шага. Быстрее, чем карточный терминал.
						</p>
						<a
							href='#'
							className='group inline-flex items-center text-gray-900 font-bold hover:text-blue-600 transition-colors border-b-2 border-gray-200 hover:border-blue-600 pb-1'
						>
							Начать сейчас
							<ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
						</a>
					</div>

					<div className='flex gap-4'>
						<button className='w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer disabled:opacity-50 hover:scale-105 active:scale-95'>
							<ArrowLeft className='w-5 h-5 text-gray-600' />
						</button>
						<button className='w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer hover:scale-105 active:scale-95'>
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
