import { formatter } from "../util/investment";

export default function Result({ resultData }) {
	return (
		<table id="result">
			<thead>
				<tr>
					<td className="center">Anno</td>
					<td className="center">Valore dell'investimento</td>
					<td className="center">Interessi (Anno)</td>
					<td className="center">Totale Interessi</td>
					<td className="center">Capitale Investito</td>
				</tr>
			</thead>
			<tbody>
				{resultData.map((data) => (
					<tr key={`data-${data.year}`}>
						<td className="center">{data.year}</td>
						<td className="center">{formatter.format(data.valueEndOfYear)}</td>
						<td className="center">{formatter.format(data.interest)}</td>
						<td className="center">{formatter.format(data.totalInterest)}</td>
						<td className="center">{formatter.format(data.totalInvestment)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
