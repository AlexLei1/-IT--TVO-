import styles from './Search.module.scss'
import { FC, useEffect, useRef, useState, forwardRef } from 'react'
import { SvgMagnifier } from '../svg'

const Search: FC = () => {
	const [isSearch, setIsSearch] = useState(false)
	const inputRef = useRef(null)


	useEffect(() => {
		inputRef.current.focus();
	},[isSearch])

	return (
		<div className={`${styles.search} ${isSearch ? styles.active : ''}`}>
			<form>
				<input ref={inputRef} className={`${isSearch ? styles.active : null}`} placeholder="movie" type="text" />
			</form>
			<button onClick={() => setIsSearch(!isSearch)} ><span className='icon-magnifier'></span></button>
		</div>
	)
}

export default Search