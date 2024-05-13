import { FC } from 'react'
import styles from './SeriesSliderCard.module.scss'
import Image from 'next/image'

const SeriesSliderCard: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrapper}>
				<Image 
						src="/images/avatar-series.png"
						fill
						sizes='100vw'
						alt='The Edge' 
					/>
				<div className={styles.imgContent}>
					<span className={styles.time}>43:54</span>
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<h5>1 серия</h5>
				<p>Просмотрено</p>
			</div>
		</div>
	)
}

export default SeriesSliderCard