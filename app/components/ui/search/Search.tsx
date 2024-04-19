import styles from './search.module.scss'
import { FC, useEffect, useRef, useState, forwardRef } from 'react'
import { SvgMagnifier } from '../svg'

const Search: FC = () => {
	const [isSearch, setIsSearch] = useState(false)
	const inputRef = useRef(null)


	useEffect(() => {
		inputRef.current.focus();
	},[isSearch])

	return (
		<div className={`${styles.wrapper} ${isSearch ? styles.active : ''}`}>
			<form>
				<input ref={inputRef} className={`${isSearch ? styles.active : null}`} placeholder="movie" type="text" />
			</form>
			<button onClick={() => setIsSearch(!isSearch)} ><SvgMagnifier/></button>
		</div>
	)
}

export default Search