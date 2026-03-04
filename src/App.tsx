import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowTo from "./components/HowTo"
import Onboarding from "./components/Onboarding"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
	return (
		<div className='min-h-screen bg-white'>
			<Header />
			<main className='flex flex-col gap-4'>
				<Hero />
				<Features />
				<HowTo />
				<Onboarding />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
