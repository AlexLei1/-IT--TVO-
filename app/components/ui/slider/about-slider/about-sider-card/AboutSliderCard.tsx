import { FC } from 'react'
import styles from './aboutSliderCard.module.scss'
import Image from 'next/image'
import Button from '@/components/ui/button/Button'
import { SvgBell } from '@/components/ui/svg'
import { useRouter } from 'next/router'

const AboutSliderCard: FC = () => {

	const { asPath } = useRouter()
	console.log(asPath)
	return (
		<div className={styles.container}>
			<div className={styles.imgWrapper}>
				<Image 
					src="/images/avatar.jpg"
					width={0}
					height={0}
					sizes='100vw'
					alt='avatar' 
				/>
			</div>

			<div className={styles.contentContainer}>
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

				<div className={styles.dataWrapper}>
					<span>7,9</span>
					<p>2024</p>
					<p>Фентези</p>
					<p>США</p>
					<p>16+</p>
				</div>

				<div className={`${styles.descriptionWrapper} ${asPath !== '/movie' ? styles.displayNone : ''}`}>
					<p>Чтобы спасти мир от разрушительной войны, мальчик 
						по имени Аанг должен справиться 
						с четырьмя стихиями и вступить в схватку с 
						безжалостным противником, который пытается его остановить.</p>
				</div>

				<div className={`${styles.btnWrapper} ${asPath !== '/movie' ? styles.displayNone : ''}`}>
					<div>
						<Button 		
							backgroundRgb={true}
							href={''}>
							Подробнее
						</Button>
					</div>
					<div>
						<Button 		
							href={'/'}
							backgroundRgb={false}
							svg='icon-bell'/>
						<Button 		
							href={'/'}
							backgroundRgb={false}
							svg='icon-bell'/>
						<Button 		
							href={'/'}
							backgroundRgb={false}
							svg='icon-bell'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSliderCard