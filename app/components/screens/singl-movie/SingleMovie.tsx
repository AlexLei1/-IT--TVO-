import { FC } from 'react'
import styles from './SingleMovie.module.scss'
import { Meta } from '@/utils/meta/Meta'
import AboutSliderCard from '@/components/ui/slider/about-slider/about-sider-card/AboutSliderCard'
import SeriesSlider from '@/components/ui/slider/series-slider/SeriesSlider'

const SingleMovie: FC = () => {
	return (
		<Meta title='Watch movies online' description='Watch MovieApp movies and TV shows online or stream right to your browser.' >
			<div className={styles.container}>
				<section>
					<AboutSliderCard/>
				</section>
				<section>
					<SeriesSlider/>
				</section>
			</div>
		</Meta>
	)
}

export default SingleMovie