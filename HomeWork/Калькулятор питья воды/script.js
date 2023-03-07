const cupSizeInput = document.getElementById('cupSize');
		const cupsPerDayInput = document.getElementById('cupsPerDay');
		const daysInMonthInput = document.getElementById('daysInMonth');
		const calculateBtn = document.getElementById('calculateBtn');
		const resultDiv = document.getElementById('result');

		function calculateWater() {
			const cupSize = parseInt(cupSizeInput.value);
			const cupsPerDay = parseInt(cupsPerDayInput.value);
			const daysInMonth = parseInt(daysInMonthInput.value);

			const waterPerDay = cupSize * cupsPerDay;
			const waterPerMonth = waterPerDay * daysInMonth;
			const waterPerYear = waterPerMonth * 12;

			resultDiv.innerHTML = `Выпито воды за день: ${waterPerDay} мл<br>
								   Выпито воды за месяц: ${waterPerMonth} мл<br>
								   Выпито воды за год: ${waterPerYear} мл`;
		}

		calculateBtn.addEventListener('click', calculateWater);
