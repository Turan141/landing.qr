import { Bot, Send } from "lucide-react"

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
	<div className='mb-6'>
		<h4 className='text-sm text-gray-500 font-medium mb-1'>{label}</h4>
		<p className='text-lg font-medium text-gray-900'>{value}</p>
	</div>
)

const Contact = () => {
	return (
		<section
			id='contact'
			className='py-24 lg:py-40 bg-[#F9FAFB] relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'
		>
			{/* Decorative background blob */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none'></div>

			<div className='container mx-auto px-4 md:px-32 relative z-10 px-4 md:px-32'>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-24 items-center'>
					{/* Left Column: Text Info */}
					<div className='lg:w-1/2'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 leading-tight text-balance'>
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
					<div className='w-full lg:w-1/2 max-w-md ml-auto relative group'>
						{/* Soft glow behind the chat */}
						<div className='absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200'></div>

						<div className='bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white p-2 overflow-hidden h-[400px] flex flex-col relative'>
							{/* Chat Header */}
							<div className='px-6 py-4 border-b border-gray-100/50 flex items-center justify-between bg-white/50'>
								<div className='flex items-center gap-3'>
									<div className='relative flex h-3 w-3'>
										<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
										<span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
									</div>
									<span className='text-sm font-medium text-gray-700'>
										AI-ассистент онлайн
									</span>
								</div>
							</div>

							<div className='flex-1 p-6 space-y-6 overflow-y-auto'>
								{/* Bot Message */}
								<div className='flex gap-3 items-start'>
									<div className='w-8 h-8 rounded-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center shrink-0 border border-white shadow-sm text-gray-600'>
										<Bot className='w-4 h-4' />
									</div>
									<div className='bg-white p-4 rounded-2xl rounded-tl-none text-sm text-gray-600 border border-gray-100/50 shadow-sm leading-relaxed max-w-[85%]'>
										Привет! 👋 Я AI-ассистент QRPay. Спросите о тарифах, подключении или
										интеграции.
									</div>
								</div>
							</div>

							{/* Input Area */}
							<div className='p-4 bg-white/50 backdrop-blur-md border-t border-gray-100/50 rounded-b-2xl'>
								<div className='relative'>
									<input
										type='text'
										placeholder='Задайте вопрос...'
										className='w-full pl-5 pr-12 py-3.5 bg-white rounded-xl border border-gray-200/60 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 text-sm outline-none transition-all placeholder:text-gray-400 shadow-sm'
									/>
									<button className='absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black rounded-lg text-white hover:bg-gray-800 transition-colors hover:scale-105 active:scale-95'>
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
