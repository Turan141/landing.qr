import { Bot, Send } from "lucide-react"

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
	<div className='mb-6'>
		<h4 className='text-sm text-gray-500 font-medium mb-1'>{label}</h4>
		<p className='text-lg font-medium text-gray-900'>{value}</p>
	</div>
)

const Contact = () => {
	return (
		<section id='contact' className='bg-[#F9FAFB] relative overflow-hidden'>
			<div className='container mx-auto px-4 md:px-32 relative z-10 '>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-24 items-center'>
					{/* Left Column: Text Info */}
					<div className='lg:w-1/2'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 leading-tight'>
							Есть вопросы?
						</h2>
						<p className='text-lg text-gray-500 mb-12 max-w-md leading-relaxed'>
							Спросите нашего AI-ассистента — ответ мгновенно. Или оставьте контакт, и мы
							перезвоним.
						</p>

						<div className='flex flex-col gap-2'>
							<ContactInfo label='Email' value='support@qrpay.io' />
							<ContactInfo label='Телефон' value='+7 (800) 123-45-67' />
						</div>
					</div>

					{/* Right Column: Chat Interface */}
					<div className='w-full lg:w-1/2 max-w-md ml-auto'>
						<div className='bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[400px] flex flex-col relative'>
							{/* Chat Header/Background Decoration?? No, looks like just white space in screenshot */}

							<div className='flex-1 p-6 space-y-6 overflow-y-auto'>
								{/* Bot Message */}
								<div className='flex gap-3 items-start'>
									<div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200 text-gray-600'>
										<Bot className='w-4 h-4' />
									</div>
									<div className='bg-gray-50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-600 border border-gray-100 shadow-sm leading-relaxed max-w-[85%]'>
										Привет! 👋 Я AI-ассистент QRPay. Спросите о тарифах, подключении или
										интеграции.
									</div>
								</div>
							</div>

							{/* Input Area */}
							<div className='p-4 border-t border-gray-50'>
								<div className='relative'>
									<input
										type='text'
										placeholder='Задайте вопрос...'
										className='w-full pl-5 pr-12 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 text-sm outline-none transition-all placeholder:text-gray-400'
									/>
									<button className='absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-400 rounded-lg text-white hover:bg-gray-600 transition-colors'>
										<Send className='w-4 h-4' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact
