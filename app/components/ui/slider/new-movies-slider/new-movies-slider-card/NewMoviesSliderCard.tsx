import { FC } from 'react'
import styles from './newMoviesSliderCard.module.scss'
import Image from 'next/image'

const NewMoviesSliderCard: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.imgWrapper}>
				<Image 
					src="/images/TheEdge.jpg"
					fill
					sizes='100vw'
					alt='The Edge' 
				/>
				<div className={styles.imgContent}>
					<span className={styles.rating}>8,9</span>
					<span className={styles.name}>Новый сезон</span>
				</div>
			</div>

			<div className={styles.content}>
				<p>На заподном фронте без перемен</p>
				<p>2022, 2 часа 37 мин</p>
			</div>
		</div>
	)
}

export default NewMoviesSliderCard