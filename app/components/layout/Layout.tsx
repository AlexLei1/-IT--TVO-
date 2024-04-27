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
		<div className='container'>	
			<Header/>
				<main>{children}</main>
			<Footer/>	
		</div>
	 </>
	)
}

export default Layout