'use client'

import React from 'react'
import ReactFocusLock from 'react-focus-lock'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import { useAppStore } from '@/store/store'
import styles from './ProjectModal.module.css'
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper'

interface ProjectModalProps {
	imageSrc: string
}

const ProjectModal: React.FC<ProjectModalProps> = ({ imageSrc }) => {
	const projectModalOpen = useAppStore((state) => state.projectModalOpen)
	const toggleProjectModalOpen = useAppStore(
		(state) => state.toggleProjectModalOpen
	)

	const handleClose = () => {
		toggleProjectModalOpen()
	}

	return (
		<div
			className={`${styles.dialogWrapper} fixed inset-0 w-screen h-lvh overflow-y-auto overflow-x-hidden flex items-center justify-center`}>
			<div
				onClick={handleClose}
				className={`${styles.backdrop} absolute inset-0 w-full h-full`}></div>

			<AnimatedWrapper
				typeFade={false}
				duration={0.2}
				additionalClasses='flex items-center justify-center'>
				<div
					className={`${styles.dialog} sm:w-fit overflow-auto p-4 bg-white shadow-xl md:p-8`}
					role='dialog'
					onKeyDown={(e) => {
						if (e.code === 'Escape') {
							handleClose()
						}
					}}
					aria-modal={true}
					aria-labelledby='dialog-title'
					aria-describedby='dialog-description'>
					<ReactFocusLock
						returnFocus
						disabled={!projectModalOpen}>
						<div className={`${styles.dialog__content} sm:w-fit grid gap-4`}>
							<div>
								<picture className='flex-grow aspect-auto'>
									<source
										media='(max-width: 1250px)'
										srcSet={`${imageSrc}@mob.webp`}
										type='image/webp'
									/>
									<source
										media='(max-width: 1250px)'
										srcSet={`${imageSrc}@mob.jpg`}
									/>
									<source
										srcSet={`${imageSrc}.webp`}
										type='image/webp'
									/>
									<Image
										width={896}
										height={985}
										className='aspect-auto w-full h-full min-h-20 bg-dark-color object-contain shadow'
										src={`${imageSrc}.jpg`}
										alt='Project case'
										loading='lazy'
									/>
								</picture>
							</div>
							<div className='flex flex-col gap-4 md:items-start lg:grid lg:grid-cols-2'>
								<Button onClickProp={handleClose}>
									Close&nbsp;modal&nbsp;window
								</Button>
								<Button linkHref='https://ustymenko.vercel.app'>
									Back&nbsp;to&nbsp;portfolio
								</Button>
							</div>
						</div>
					</ReactFocusLock>
				</div>
			</AnimatedWrapper>
		</div>
	)
}

export default ProjectModal
