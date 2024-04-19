import { FC } from 'react'
import styles from './Home.module.scss'
import AboutSlider from '@/components/ui/slider/about-slider/AboutSlider'
import { Meta } from '@/utils/meta/Meta'

const Home: FC = () => {
	return (
		<Meta title='Watch movies online' description='Watch MovieApp movies and TV shows online or stream right to your browser.' >
			<div className={styles.home}>
				<section style={{marginTop: 92}}>
					<AboutSlider/>
				</section>
			</div>
		</Meta>
	)
}

export default Home