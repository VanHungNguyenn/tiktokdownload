import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import PageConvertVideo from '../../components/PageConvertVideo'
import Question from '../../components/Question'
import Tutorial from '../../components/Tutorial'

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<PageConvertVideo />
			<Intro />
			<Tutorial />
			<Question />
			<Footer />
		</div>
	)
}

export default Home
