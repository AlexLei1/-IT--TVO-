import { FC } from 'react'
import styles from './Footer.module.scss'
import NavLink from '@/components/ui/nav-link/NavLink'
import { SvgTg, SvgVk, SvgYoutube } from '@/components/ui/svg'
import Button from '@/components/ui/button/Button'
import Logo from '@/components/ui/logo/Logo'

const Footer: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.socialContainer}>
				<div className={styles.btnWrapper}>
					<Button backgroundRgb={false}>
						Написать в поддержку
					</Button>
				</div>
				<div className={styles.socialLinkContainer}>
					<div className={styles.socialLinkWrapper}>
						<NavLink text='Youtube' href='/'/>
						<span className='icon-youtube'></span>
					</div>
					<div className={styles.socialLinkWrapper}>
						<NavLink text='ВКонтакте' href='/'/>
						<span className='icon-vk'></span>
					</div>
					<div className={styles.socialLinkWrapper}>
						<NavLink text='Telegram' href='/'/>
						<span className='icon-tg'></span>
					</div>
				</div>
			</div>
			<div className={styles.contactsContainer}>
				<ul>
					<li><NavLink text='Контакты' href='/'/></li>
					<li><NavLink text='Реферальная программа' href='/'/></li>
					<li><NavLink text='Скачать приложение' href='/'/></li>
					<li><NavLink text='Вопросы и ответы' href='/'/></li>
					<li><NavLink text='Условия использования' href='/'/></li>
				</ul>
			</div>
			<div className={styles.copyrightContainer}>
				<p>2023, ООО «ТВОЁ ЛАЙВ» 18+<br/>ИНН  7720904034</p>
				<Logo/>
			</div>
		</div>
	)
}

export default Footer