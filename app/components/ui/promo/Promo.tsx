import { FC } from 'react'
import styles from './Promo.module.scss'
import Button from '../button/Button'
import Image  from 'next/image';
import { SvgBell } from '../svg';

const Promo: FC = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.block}>
				<div className={styles.firstContent}>

					<h1 className={styles.title}>Смотри зарубежное<br/>кино</h1>

					<ul className={styles.list}>
						<li>
							<SvgBell/>
							<p>От 149 ₽ в месяц</p>
						</li>
						<li>
							<SvgBell/>
							<p>Доступно на любом устройстве</p>
						</li>
						<li>
							<SvgBell/>
							<p>Никакой рекламы</p>
						</li>
						<li>
							<SvgBell/>
							<p>Единая подписка без доплат</p>
						</li>
					</ul>
					<div className={styles.btnWrapper}>
						<Button backgroundRgb={true} href='/'>Смотреть 7 дней за 0₽</Button>
					</div>
				</div>

				<div className={styles.lastContent}>
					<ul>
						<li className={styles.first}><span>СУБТИТРЫ</span></li>
						<li className={styles.second}><span>ДУБЛЯЖ</span></li>
						<li className={styles.third}><span>FULL HD</span></li>
					</ul>
					<div className={styles.imgWrapper}>
						<Image 
							src="/images/popcorn.png"
							width={0}
							height={0}
							sizes='100vw'
							alt='avatarLogo' 
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Promo