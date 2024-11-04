import React from 'react'

const Logo: React.FC = () => {
	return (
		<div className='inline-block py-3 px-3 bg-neutral-950'>
			<svg
				width='60'
				height='32'
				viewBox='0 0 60 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M8.50098 14.4902C8.11655 13.0539 7.70265 11.7426 7.25927 10.5564H2.08368L0.62263 14.4902H0L4.13906 3.5235L5.38078 0.00354004H5.79468C6.87248 2.99639 7.62482 5.06592 8.0517 6.21211C8.47858 7.35831 8.90663 8.4314 9.33587 9.43138C9.76274 10.4337 10.5139 12.1212 11.5894 14.4938L8.50098 14.4902ZM7.08592 10.1425C6.75338 9.27219 6.26991 8.17551 5.63549 6.85243C5.19446 5.95387 4.80885 5.11191 4.47867 4.32655L2.28533 10.1425H7.08592Z'
					fill='white'
				/>
				<path
					d='M22.5561 10.6377C22.7395 11.57 22.8331 12.5177 22.8356 13.4678C22.8356 13.7438 22.8356 13.9702 22.8143 14.1506C22.7931 14.331 22.7931 14.4478 22.7931 14.5044H19.8958C19.9463 14.1825 19.9735 13.8573 19.9771 13.5315C19.969 12.6566 19.8682 11.785 19.6764 10.9313C19.5346 10.1491 19.2581 9.39739 18.8592 8.7097C18.5447 8.22539 18.1499 7.79827 17.6918 7.44676C17.2676 7.0773 16.7293 6.86496 16.1671 6.84536H15.548C15.548 9.0104 15.5692 10.4797 15.6117 11.2533C15.6541 12.0268 15.772 13.1105 15.9654 14.5044H12.8594C12.9584 12.903 13.0351 11.5021 13.0893 10.3016C13.1436 9.1012 13.1707 8.08707 13.1707 7.25926C13.1707 6.43145 13.1436 5.41733 13.0893 4.21689C13.0327 3.01409 12.9584 1.61671 12.8594 0.0141563H18.8734C19.3571 0.0457386 19.8337 0.14702 20.2884 0.314859C20.939 0.530897 21.531 0.894075 22.0184 1.37615C22.2915 1.65946 22.5031 1.99609 22.6401 2.36499C22.777 2.73388 22.8364 3.12709 22.8143 3.51997C22.8143 4.58127 22.4606 5.35954 21.7884 5.84774C21.1469 6.31836 20.4085 6.63985 19.6269 6.78876C19.9935 6.94834 20.3401 7.15018 20.6599 7.39016C21.0068 7.6389 21.3144 7.9382 21.5726 8.27811C22.0794 8.97748 22.4162 9.78542 22.5561 10.6377ZM17.5043 6.43499C17.874 6.45045 18.243 6.3914 18.5895 6.26134C18.9359 6.13128 19.2526 5.93287 19.5208 5.67793C19.7917 5.39454 20.0007 5.05797 20.1347 4.68954C20.2687 4.32111 20.3246 3.92885 20.2991 3.53765C20.2991 2.50112 20.016 1.72992 19.45 1.21696C18.9028 0.7143 18.1836 0.440788 17.4406 0.452822C16.9168 0.438312 16.3999 0.574618 15.9513 0.845507C15.7809 1.66261 15.6628 2.48974 15.5975 3.32186C15.548 4.04826 15.5232 4.94918 15.5232 6.02462C16.1519 6.28479 16.824 6.42402 17.5043 6.43499Z'
					fill='white'
				/>
				<path
					d='M32.7163 14.4902C31.8885 13.2072 31.2918 12.3028 30.9263 11.7768C30.5607 11.2509 30.1433 10.7132 29.674 10.1637C29.2023 9.6118 28.3886 8.6873 27.233 7.39016C27.233 8.20382 27.2601 9.20025 27.3143 10.3795C27.3686 11.5587 27.4452 12.9289 27.5443 14.4902H24.4382C24.5326 12.8888 24.608 11.4879 24.6646 10.2875C24.7212 9.08705 24.7495 8.07293 24.7495 7.24511C24.7495 6.4173 24.7212 5.40318 24.6646 4.20273C24.6116 2.99993 24.5337 1.60256 24.4382 0H27.5443C27.3485 3.42209 27.2448 5.67204 27.233 6.74985L34.372 0H34.9946L28.9806 5.85835C30.5136 7.955 31.5748 9.37006 32.1645 10.1035C32.7541 10.837 33.9793 12.2969 35.8401 14.4831L32.7163 14.4902Z'
					fill='white'
				/>
				<path
					d='M11.791 21.0667C11.7344 22.266 11.7096 23.2778 11.7096 24.1091C11.7096 24.9405 11.7344 25.9487 11.791 27.1515C11.8476 28.3543 11.9219 29.7517 12.0174 31.3507H8.91489C9.01041 29.8083 9.08823 28.4463 9.1413 27.2753C9.19436 26.1043 9.22621 25.1138 9.22621 24.3143H2.8089C2.8089 25.1138 2.83603 26.1008 2.89027 27.2753C2.94688 28.4463 3.02116 29.8083 3.12022 31.3507H0.0141602C0.110856 29.7517 0.186331 28.3519 0.240575 27.1515C0.297177 25.9487 0.325475 24.9369 0.325475 24.1091C0.325475 23.2813 0.297177 22.266 0.240575 21.0667C0.183973 19.8675 0.109677 18.463 0.0141602 16.864H3.12022L3.09899 17.2991C3.07069 17.7142 3.01881 18.6576 2.94334 20.1292C2.86904 21.5938 2.82305 22.786 2.8089 23.7129H9.22621C9.22621 22.786 9.16607 21.5903 9.09178 20.1292C9.01748 18.6682 8.96088 17.7307 8.93612 17.2991L8.91489 16.864H12.0174C11.9231 18.463 11.8476 19.8639 11.791 21.0667Z'
					fill='white'
				/>
				<path
					d='M21.6646 20.9394C22.5444 21.3504 23.283 22.0127 23.7872 22.8426C24.3358 23.8527 24.6274 24.9823 24.636 26.1318C24.6446 27.2812 24.3701 28.4151 23.8367 29.4333C23.3486 30.258 22.629 30.921 21.7672 31.3401C20.9165 31.7468 19.9893 31.9687 19.0467 31.991C18.0475 31.9754 17.0633 31.7463 16.16 31.3189C15.2794 30.8989 14.5414 30.2298 14.0374 29.3944C13.482 28.4274 13.2065 27.325 13.2414 26.2105C13.1939 25.0417 13.4956 23.8852 14.1082 22.8886C14.6439 22.0515 15.4089 21.386 16.3121 20.9712C17.1656 20.5799 18.0976 20.3899 19.0361 20.4158C19.9412 20.3821 20.8415 20.5615 21.6646 20.9394ZM17.2142 21.6469C16.7637 22.1516 16.4721 22.7779 16.3758 23.4476C16.216 24.4191 16.1438 25.403 16.16 26.3874C16.143 27.2818 16.2081 28.1758 16.3546 29.0583C16.4538 29.6728 16.7434 30.2407 17.1824 30.6821C17.7039 31.1282 18.3711 31.3674 19.0573 31.3542C19.7166 31.3822 20.3601 31.1482 20.8474 30.7033C21.2569 30.2598 21.5178 29.6996 21.5938 29.1007C21.7102 28.2012 21.761 27.2943 21.7459 26.3874C21.7653 25.3433 21.7074 24.2992 21.5726 23.2636C21.5027 22.6369 21.2336 22.0492 20.8049 21.5868C20.3013 21.1621 19.6503 20.9535 18.9937 21.0066C18.6689 20.985 18.3433 21.0308 18.0371 21.141C17.7309 21.2512 17.4507 21.4234 17.2142 21.6469Z'
					fill='white'
				/>
				<path
					d='M36.2575 31.3719C36.4253 31.3645 36.5884 31.3146 36.7316 31.2269C36.8989 31.1402 37.0587 31.0396 37.2091 30.9261L37.478 30.7316V31.1455C37.478 31.1738 37.3931 31.2551 37.2198 31.3931C36.9981 31.558 36.7538 31.6903 36.4946 31.7858C36.1477 31.9166 35.7791 31.9803 35.4085 31.9733C35.0984 31.9985 34.7863 31.961 34.491 31.8632C34.1956 31.7653 33.9229 31.6091 33.6892 31.4037C33.5137 31.2366 33.3737 31.0358 33.2777 30.8133C33.1816 30.5909 33.1315 30.3513 33.1302 30.1089V30.0488C32.7746 30.6134 32.2895 31.0852 31.7152 31.425C31.0113 31.8162 30.2133 32.0059 29.4086 31.9733C28.6839 32.0259 27.9645 31.8163 27.3816 31.3825C26.924 30.9883 26.6104 30.4532 26.4901 29.8613C26.3393 29.0984 26.2706 28.3216 26.2849 27.5441L26.3061 25.9699C26.3061 25.1704 26.2743 24.3874 26.2106 23.6209C26.1504 22.8568 26.0868 22.2058 26.0266 21.7282C25.9665 21.2507 25.917 20.9217 25.8887 20.7943H29.2034C29.1385 21.0107 29.0993 21.2339 29.0867 21.4594C29.0124 21.983 28.9417 22.7223 28.8815 23.674C28.8214 24.6256 28.7895 25.7965 28.7895 27.2116C28.7772 28.0101 28.8114 28.8086 28.8921 29.6031C28.9255 30.0672 29.0818 30.5141 29.345 30.8979C29.4792 31.0553 29.649 31.1786 29.8403 31.2573C30.0316 31.336 30.239 31.368 30.4452 31.3507C30.7651 31.3507 31.0812 31.2803 31.371 31.1446C31.6608 31.0089 31.9172 30.8111 32.122 30.5653C32.5957 30.0306 32.9792 29.4225 33.2576 28.7646C33.3142 28.2411 33.3425 27.8626 33.3425 27.6255C33.3425 26.0949 33.3106 24.8225 33.247 23.8084C33.1868 22.7931 33.1161 22.0148 33.0418 21.47C32.9675 20.9252 32.9286 20.6988 32.9286 20.7943H36.2398C36.2398 20.6988 36.2009 20.9252 36.1266 21.47C36.0523 22.0148 35.9816 22.7931 35.9179 23.8084C35.8542 24.8237 35.8259 26.0937 35.8259 27.6255V30.7316C35.8224 31.1596 35.9674 31.3719 36.2575 31.3719Z'
					fill='white'
				/>
				<path
					d='M45.3316 20.7023C45.8592 20.8774 46.3639 21.1149 46.8351 21.4099C47.0441 21.527 47.2377 21.6696 47.4117 21.8344C47.3598 21.9735 47.2419 22.2601 47.0579 22.694C46.8714 23.1285 46.6502 23.5473 46.3964 23.9464C46.1382 24.3461 45.9011 24.5442 45.6889 24.5442C45.6092 24.5384 45.5331 24.5091 45.4701 24.46C45.4071 24.4109 45.3601 24.3441 45.3351 24.2683C45.204 23.9693 45.0963 23.6606 45.0132 23.3449C44.8965 22.9099 44.7475 22.4842 44.5674 22.0714C44.4057 21.7203 44.1633 21.4124 43.8599 21.1728C43.5164 20.9112 43.092 20.7785 42.6607 20.7978C42.4376 20.7752 42.2124 20.8024 42.0012 20.8776C41.79 20.9528 41.5982 21.074 41.4397 21.2325C41.2812 21.391 41.16 21.5828 41.0848 21.794C41.0096 22.0052 40.9824 22.2305 41.005 22.4535C40.9838 22.9207 41.1306 23.38 41.4189 23.7482C41.6946 24.0881 42.0443 24.3603 42.4413 24.5442C42.9768 24.7902 43.5261 25.0052 44.0863 25.1881C44.6833 25.3758 45.2682 25.6003 45.8375 25.8602C46.2782 26.0681 46.6646 26.3758 46.966 26.7588C47.2813 27.1909 47.4409 27.7172 47.4188 28.2517C47.4219 28.9059 47.2391 29.5475 46.8917 30.1019C46.5451 30.672 46.0579 31.1434 45.4766 31.4709C44.8724 31.808 44.1909 31.9823 43.4991 31.9768C42.7942 31.965 42.0943 31.8567 41.4189 31.6549C40.698 31.4613 39.9892 31.225 39.2963 30.9474C38.649 30.6856 38.3235 30.5476 38.3235 30.5335C38.4046 30.2488 38.5014 29.9689 38.6136 29.695C38.7879 29.2173 39.0058 28.7567 39.2645 28.3189C39.5051 27.9191 39.7456 27.7599 39.972 27.8449C40.1269 27.9093 40.2597 28.0175 40.3541 28.1562C40.5515 28.4148 40.7345 28.6841 40.9024 28.9627C41.3369 29.65 41.8446 30.2881 42.4166 30.866C42.6369 31.0919 42.9005 31.2709 43.1917 31.3925C43.4829 31.5141 43.7956 31.5756 44.1111 31.5735C44.3354 31.5796 44.5584 31.5365 44.7643 31.4473C44.9703 31.3581 45.1542 31.2248 45.3033 31.057C45.5961 30.7495 45.7617 30.3425 45.7667 29.9179C45.765 29.6677 45.699 29.4221 45.5751 29.2046C45.4512 28.9872 45.2736 28.8052 45.0592 28.6762C44.3523 28.2313 43.6034 27.8569 42.8234 27.5583C42.0781 27.2399 41.4673 26.9569 40.9909 26.7093C40.5333 26.4759 40.1174 26.1687 39.7598 25.8001C39.4224 25.4591 39.2104 25.014 39.1584 24.5371L39.1371 24.247C39.148 23.672 39.2755 23.1051 39.5121 22.5808C39.7916 21.9568 40.2432 21.4254 40.814 21.049C41.5528 20.5823 42.4176 20.355 43.2903 20.3981C43.9829 20.3858 44.6727 20.4887 45.3316 20.7023Z'
					fill='white'
				/>
				<path
					d='M56.4044 24.9263L52.0707 27.6609C52.4028 28.6445 52.9886 29.5232 53.7688 30.208C54.406 30.8001 55.2377 31.1385 56.1072 31.1597C56.4971 31.1656 56.8869 31.1479 57.2746 31.1066C57.5612 31.0678 57.8382 30.9767 58.0918 30.8377C58.4291 30.6478 58.7366 30.4095 59.0046 30.1302L59.2097 30.3389C58.9774 30.5721 58.733 30.793 58.4774 31.0005C58.0555 31.2809 57.5941 31.4967 57.1084 31.6408C56.3169 31.8958 55.488 32.0154 54.6568 31.9945C53.5044 32.0413 52.3597 31.7877 51.3349 31.2587C50.5193 30.8183 49.8614 30.1344 49.4529 29.3024C49.0521 28.4635 48.8499 27.5434 48.8621 26.6138C48.8566 25.5736 49.0787 24.5449 49.513 23.5997C49.9486 22.6546 50.6459 21.8542 51.5224 21.2931C52.5242 20.6725 53.6878 20.3634 54.8655 20.4052C55.7883 20.3642 56.7063 20.559 57.5329 20.9712C58.1044 21.2601 58.5917 21.6914 58.9479 22.2235C59.2168 22.6799 59.3017 22.97 59.2062 23.0938C58.3049 23.7532 57.3697 24.3649 56.4044 24.9263ZM55.849 21.4983C55.5376 21.0314 55.0035 20.7908 54.2429 20.7908C53.8783 20.7924 53.5187 20.8763 53.191 21.0361C52.8633 21.196 52.5759 21.4277 52.3502 21.7141C51.8172 22.325 51.5507 23.3285 51.5507 24.7247C51.5489 25.5454 51.6681 26.362 51.9045 27.148C52.9686 26.6025 53.9769 25.9544 54.915 25.2129C55.8489 24.4735 56.3124 23.7164 56.3124 22.9452C56.3045 22.4277 56.1433 21.9241 55.849 21.4983Z'
					fill='white'
				/>
			</svg>
		</div>
	)
}

export default Logo
