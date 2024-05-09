import { FC } from 'react'
import styles from './TopMoviesSliderCard.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { Svg1 } from '@/components/ui/svg';

const TopMoviesSliderCard: FC = () => {
	return (

			<Link className={styles.link} href={`/`}>
				<div className={styles.svgWrapper}>
					<Svg1/>
				</div>
				<div className={styles.movieImgWrapper}>
					<Image 
						src="/images/TheEdge.jpg"
						fill
						sizes='100vw'
						alt='qwe'
					/>
				</div>
			</Link>

	)
}

export default TopMoviesSliderCard