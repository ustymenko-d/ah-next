import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Tabs from '@/components/Tabs/Tabs'
import { PROJECTS_TABS } from '@/const/const'

const navItems = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Projects',
	},
]

const ProjectsPage = () => (
	<main className='flex-auto'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20'>
			<Breadcrumbs navItems={navItems} />

			<section className='pt-8 mb-14'>
				<h1 className='mb-4 text-5xl font-semibold'>Projects</h1>
				<p className='mb-4 text-3xl font-semibold'>
					Our projects are examples of attitudes rather than design
				</p>
				<p className='text-xl mb-14 lg:w-4/5'>
					They are samples in a series of contextual examination rather than
					isolated masterpieces. They are associative rather than symbolic. They
					are comments rather than statements. Every story told is a shared
					experience of contemporary conditions set within a given frame.
				</p>

				<Tabs
					tabsType='projects'
					tabsList={PROJECTS_TABS}
				/>
			</section>
		</div>
	</main>
)

export default ProjectsPage
