import Image from 'next/image'
import React from 'react'
import styles from './ArticleItem.module.css'
import { Article } from '@/const/const.interfaces'

interface ArticleItemProps {
	article: Article
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
	const { title, content, dateTime, imgSrc } = article

	return (
		<div className='h-full flex flex-col bg-neutral-100'>
			<picture>
				<source
					media='(max-width: 1024px)'
					srcSet={`${imgSrc}@mob.webp`}
					type='image/webp'
				/>
				<source
					media='(max-width: 1024px)'
					srcSet={`${imgSrc}@mob.jpg`}
				/>
				<source
					srcSet={`${imgSrc}.webp`}
					type='image/webp'
				/>
				<Image
					className={`${styles.image} bg-dark-color`}
					src={`${imgSrc}.jpg`}
					loading='lazy'
					alt=''
					width={2221}
					height={1666}
				/>
			</picture>

			<div className='p-4'>
				<time
					className={`${styles.date} mb-1 text-xl`}
					dateTime={dateTime}>
					{dateTime}
				</time>
				<h3 className='font-semibold text-2xl mb-1'>{title}</h3>
				<p className='text-lg'>{content}</p>
			</div>
		</div>
	)
}

export default ArticleItem
