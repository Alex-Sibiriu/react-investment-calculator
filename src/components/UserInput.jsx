export default function UserInput({ data, name, title, update }) {
	return (
		<div>
			<label htmlFor={name}>{title}</label>
			<input
				onChange={(event) => update(name, event.target.value)}
				id={name}
				type="number"
				value={data}
			/>
		</div>
	);
}
