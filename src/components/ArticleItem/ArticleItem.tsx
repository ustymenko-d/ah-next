import clsx from 'clsx'
import Image from 'next/image'
import { Article } from '@/const/const.types'
import styles from './ArticleItem.module.css'

const ArticleItem = ({ article }: { article: Article }) => {
	const { title, content, dateTime, imgSrc } = article

	return (
		<div className='flex flex-col h-full bg-neutral-100'>
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
					className={clsx(styles.image, 'flex-grow bg-dark-color')}
					src={`${imgSrc}.jpg`}
					loading='lazy'
					alt=''
					width={2221}
					height={1666}
				/>
			</picture>

			<div className='p-4'>
				<time
					className={clsx(styles.date, 'mb-1 text-xl')}
					dateTime={dateTime}>
					{dateTime}
				</time>
				<h3 className='mb-1 text-2xl font-semibold'>{title}</h3>
				<p className='text-lg'>{content}</p>
			</div>
		</div>
	)
}

export default ArticleItem
