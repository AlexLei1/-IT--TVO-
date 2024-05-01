import { FC } from 'react'
import styles from './TopMoviesSliderCard.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { Svg1 } from '@/components/ui/svg';

const TopMoviesSliderCard: FC = () => {
	return (
		<>
		<div className={styles.wrapper}>
			<Link className={styles.link} href={`/`}>
				<div className={styles.svgWrapper}>
					<Svg1/>
				</div>
				<div className={styles.movieImgWrapper}>
					<Image 
						src="/images/TheEdge.jpg"
						width={0}
						height={0}
						sizes='100vw'
						alt='qwe'
					/>
				</div>
			</Link>
		</div>
		</>
	)
}

export default TopMoviesSliderCard