import { FC } from 'react'
import Head from 'next/head'
import { ISeo } from './meta.types'
import { siteName, titleMerge } from '@/configs/seo.config'
import { onlyText } from '../string/clearText'
import { MetaNoIndex } from './MetaNoIndex'

export const Meta: FC<ISeo> = ({
	title,
	description,
	image = null,
	children
}) => {

	return (
		<>
			{description ? (
				<Head>
					<title itemProp='headline'>{titleMerge(title)}</title>
					<meta
						itemProp='description'
						name='description'
						content={onlyText(description, 152)}
					/>
					{/* <link rel='canonical' href={currentUrl} /> */}
					<meta property='og:locale' content='ru' />
					<meta property='og:title' content={titleMerge(title)} />
					{/* <meta property='og:url' content={currentUrl} /> */}
					{/* <meta property='og:image' content={image || logoImage} /> */}
					<meta property='og:site_name' content={siteName} />
					<meta
						property='og:description'
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<MetaNoIndex title={title} />
			)}
			{children}
		</>
	)
}
