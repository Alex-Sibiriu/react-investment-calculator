import { useState } from "react";

import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { calculateInvestmentResults } from "./util/investment";

const DATA = {
	initialInvestment: 10000,
	annualInvestment: 1500,
	expectedReturn: 3,
	duration: 5,
};

function App() {
	const [investmentData, setInvestmentData] = useState(DATA);

	function handleInvestmentData(traits, newValue) {
		setInvestmentData((prevData) => {
			const updatedData = { ...prevData, [traits]: +newValue };

			return updatedData;
		});
	}

	const investmentResult = calculateInvestmentResults(investmentData);

	const isDurationValid = investmentData.duration > 0;

	return (
		<>
			<div id="user-input">
				<section className="input-group">
					<UserInput
						data={investmentData.initialInvestment}
						title="Investimento Iniziale"
						name="initialInvestment"
						update={handleInvestmentData}
					/>
					<UserInput
						data={investmentData.annualInvestment}
						title="Investimento Annuale"
						name="annualInvestment"
						update={handleInvestmentData}
					/>
					<UserInput
						data={investmentData.expectedReturn}
						title="Rendimento Previsto"
						name="expectedReturn"
						update={handleInvestmentData}
					/>
					<UserInput
						data={investmentData.duration}
						title="Durata"
						name="duration"
						update={handleInvestmentData}
					/>
				</section>
			</div>
			{!isDurationValid && (
				<p className="center">Inserisci una durata superiore a zero</p>
			)}
			{isDurationValid && <Result resultData={investmentResult} />}
		</>
	);
}

export default App;
