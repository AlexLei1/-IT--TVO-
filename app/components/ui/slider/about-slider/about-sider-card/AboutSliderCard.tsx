import { FC } from 'react'
import styles from './aboutSliderCard.module.scss'
import Image from 'next/image'
import Button from '@/components/ui/button/Button'
import { SvgAvatar, SvgBell } from '@/components/ui/svg'

const AboutSliderCard: FC = () => {
	return (
		<div className={styles.sliderCard}>

			<div className={styles.imgWrapper}>
				<Image 
					src="/images/avatar.jpg"
					width={0}
					height={0}
					sizes='100vw'
					alt='avatar' 
				/>
			</div>

			<div className={styles.content}>
				<div className={styles.imgLogoWrapper}>
					<div>
						<Image 
							src="/images/avatarLogo.jpg"
							width={0}
							height={0}
							sizes='100vw'
							alt='avatarLogo' 
						/>
					</div>
				</div>

				<div className={styles.text}>
					<span>7,9</span>
					<p>2024</p>
					<p>Фентези</p>
					<p>США</p>
					<p>16+</p>
				</div>
				<div className={styles.buttonWrapper}>
					<Button 		
						fontSize={16} 
						backgroundRgb={true} 
						text={'7 дней за 0р'}
						href={'title'}>
							<SvgBell/>
					</Button>
					<Button 		
						fontSize={16} 
						backgroundRgb={true} 
						text={'7 дней за 0р'}
						href={'title'}>
						<SvgBell/>
					</Button>
					<Button 		
						fontSize={16} 
						backgroundRgb={true} 
						text={'7 дней за 0р'}
						href={'title'}>
							<SvgBell/>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default AboutSliderCard