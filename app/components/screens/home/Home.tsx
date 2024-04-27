import { FC } from 'react'
import styles from './home.module.scss'
import AboutSlider from '@/components/ui/slider/about-slider/AboutSlider'
import { Meta } from '@/utils/meta/Meta'
import NewMoviesSlider from '@/components/ui/slider/new-movies-slider/NewMoviesSlider'

const Home: FC = () => {
	return (
		<Meta title='Watch movies online' description='Watch MovieApp movies and TV shows online or stream right to your browser.' >
			<div className={styles.home}>
				<AboutSlider/>
				<NewMoviesSlider/>
			</div>
		</Meta>
	)
}

export default Home