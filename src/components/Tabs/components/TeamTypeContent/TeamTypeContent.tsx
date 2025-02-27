import React from 'react'
import { OneTabContent, TeamMember } from '@/const/const.interfaces'
import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'
// import styles from './TeamTypeContent.module.css'

interface TeamTypeContentProps {
	tabsContent: OneTabContent[]
	activeTab: string
}

const TeamTypeContent: React.FC<TeamTypeContentProps> = ({
	tabsContent,
	activeTab,
}) => {
	return tabsContent.map((item, index) => {
		const { tabName, content } = item

		return (
			<div
				key={`${tabName}-${index}`}
				className={
					activeTab === tabName
						? 'h-full'
						: 'overflow-hidden invisible opacity-0 h-0 w-0'
				}
				id={`team-tabpanel-${index}`}
				role='tabpanel'
				aria-labelledby={`team-tab-${index}`}>
				<div className='grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
					{(content as TeamMember[]).map(
						(member: TeamMember, memberIndex: number) => (
							<AnimatedWrapper
								typeFade={false}
								key={`${member.name}-${memberIndex}`}
								delay={(memberIndex + (memberIndex)) * 0.1}>
								<TeamMemberCard teamMember={member} />
							</AnimatedWrapper>
						)
					)}
				</div>
			</div>
		)
	})
}

export default TeamTypeContent
