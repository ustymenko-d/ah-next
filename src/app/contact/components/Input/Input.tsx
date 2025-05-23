import clsx from 'clsx'
import styles from './Input.module.css'

interface InputProps {
	name: 'name' | 'contact'
	type: 'text' | 'email' | 'tel'
	placeholder: string
	errors: { name?: string; contact?: string }
	formData: { name: string; contact: string }
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
	name,
	type,
	placeholder,
	formData,
	errors,
	handleChange,
}: InputProps) => (
	<div className='w-full sm:w-3/5 lg:w-1/2'>
		<input
			name={name}
			type={type}
			value={formData[name]}
			onChange={handleChange}
			placeholder={placeholder}
			className={clsx(
				styles.input,
				'w-full py-5 px-6 border border-dark-color rounded-none leading-5'
			)}
		/>
		{errors[name] && <p className='mt-1 text-red-500'>{errors[name]}</p>}
	</div>
)

export default Input
