import { CreditCard, Zap, Shield, Smartphone, ArrowRight } from "lucide-react"
import type { JSX } from "react"

const FeatureCard = ({
	icon,
	title,
	description
}: {
	icon: JSX.Element
	title: string
	description: string
}) => {
	return (
		<div className='bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5 p-8 rounded-3xl h-full min-h-[320px] flex flex-col justify-end transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/10 duration-500 group'>
			<div className='w-12 h-12 bg-white/5 text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all backdrop-blur-sm'>
				{icon}
			</div>
			<h3 className='text-xl font-bold mb-3 text-white'>{title}</h3>
			<p className='text-gray-400 leading-relaxed text-sm'>{description}</p>
		</div>
	)
}

const Features = () => {
	return (
		<section id='about' className='py-24 lg:py-40 bg-white relative overflow-hidden'>
			{/* Subtle background decoration */}
			<div className='absolute top-0 right-0 -mr-64 -mt-64 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none'></div>

			<div className='container mx-auto px-4 md:px-32 relative z-10'>
				<div className='max-w-3xl mb-16 md:text-left'>
					<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6'>
						<span className='text-sm font-semibold text-blue-600 uppercase tracking-wider'>
							Возможности
						</span>
					</div>
					<h2 className='text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-gray-900 leading-[1.1] text-balance'>
						Всё, что нужно для <br className='hidden md:block' />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
							приёма платежей
						</span>
					</h2>
					<p className='text-lg text-gray-500 max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed font-medium'>
						QRPay заменяет POS-терминал. Торговец вводит сумму — покупатель сканирует и
						платит.
					</p>

					<a
						href='#'
						className='group inline-flex items-center text-gray-900 font-bold hover:text-blue-600 transition-colors border-b-2 border-gray-200 hover:border-blue-600 pb-1'
					>
						Узнать больше
						<ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
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
