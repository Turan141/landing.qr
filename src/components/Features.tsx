import { CreditCard, Zap, Shield, Smartphone, ArrowRight } from "lucide-react"

const FeatureCard = ({
	icon,
	title,
	description
}: {
	icon: any
	title: string
	description: string
}) => {
	return (
		<div className='bg-[#111] p-8 rounded-3xl  h-full min-h-[320px] flex flex-col justify-end transition-transform hover:scale-[1.02] duration-300 group'>
			<div className='w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors backdrop-blur-sm'>
				{icon}
			</div>
			<h3 className='text-xl font-bold mb-3 text-white'>{title}</h3>
			<p className='text-gray-400 leading-relaxed text-sm'>{description}</p>
		</div>
	)
}

const Features = () => {
	return (
		<section id='about' className='bg-white'>
			<div className='container mx-auto px-4 md:px-32'>
				<div className='max-w-3xl mb-16 md:text-left'>
					<h2 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight'>
						Всё, что нужно для <br className='hidden md:block' />
						приёма платежей
					</h2>
					<p className='text-lg text-gray-500 max-w-xl mb-6 mx-auto md:mx-0'>
						QRPay заменяет POS-терминал. Торговец вводит сумму — покупатель сканирует и
						платит.
					</p>

					<a
						href='#'
						className='inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-600 pb-0.5'
					>
						Узнать больше
						<ArrowRight className='w-4 h-4 ml-2' />
					</a>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<FeatureCard
						icon={<Smartphone className='w-5 h-5' />}
						title='Без оборудования'
						description='Не нужен POS-терминал. QR генерируется на любом устройстве с экраном.'
					/>
					<FeatureCard
						icon={<Zap className='w-5 h-5' />}
						title='Мгновенные выплаты'
						description='Деньги поступают на ваш счёт в тот же день. Без задержек.'
					/>
					<FeatureCard
						icon={<Shield className='w-5 h-5' />}
						title='Безопасно'
						description='PCI DSS Level 1. Все транзакции зашифрованы end-to-end.'
					/>
					<FeatureCard
						icon={<CreditCard className='w-5 h-5' />}
						title='Все способы оплаты'
						description='Visa, Mastercard, Apple Pay, Google Pay, PayPal — всё в одном QR.'
					/>
				</div>
			</div>
		</section>
	)
}

export default Features
