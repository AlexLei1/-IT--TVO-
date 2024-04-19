import { FC } from 'react'
import styles from './layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

interface ILayout {
	children: React.ReactNode
}

const Layout:FC<ILayout> = ({children}) => {
	return (
	 <>
		<div>
			<Header/>
				<div className='wrapper'>
						{children}
					<Footer/>	
				</div>
		</div>
	 </>
	)
}

export default Layout