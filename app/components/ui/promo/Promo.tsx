import { FC } from 'react'
import styles from './Promo.module.scss'
import Button from '../button/Button'
import { Image } from 'next/image';
import { SvgBell } from '../svg';

const Promo: FC = () => {
	return (
		<section className={styles.wrapper}>
			<div>
				<div>
					<h1></h1>
					<li>
						<ul>
							<SvgBell/>
							<p></p>
						</ul>
						<ul>
							<SvgBell/>
							<p></p>
						</ul>
						<ul>
							<SvgBell/>
							<p></p>
						</ul>
						<ul>
							<SvgBell/>
							<p></p>
						</ul>
					</li>
					<Button />
				</div>

				<div>
					<li>
						<ul><span>Субтитры</span></ul>
						<ul><span>Дубляж</span></ul>
						<ul><span>FULL HD</span></ul>
					</li>
					<Image href={'/public/images/popcorn.jpg'} alt={}/>
				</div>
			</div>
		</section>
	)
}

export default Promo