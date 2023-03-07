// получаем элементы формы
const expensesInput = document.getElementById('expenses');
const incomeInput = document.getElementById('income');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// обрабатываем нажатие на кнопку
calculateBtn.addEventListener('click', () => {
  // получаем значения из полей ввода
  const expenses = parseFloat(expensesInput.value);
  const income = parseFloat(incomeInput.value);

  // проверяем, что значения корректны
  if (isNaN(expenses) || isNaN(income)) {
    resultDiv.textContent = 'Пожалуйста, введите числовые значения';
  } else {
    // вычисляем разницу между доходом и расходами
    const difference = income - expenses;

    // выводим результат
    if (difference >= 0) {
      resultDiv.textContent = `У вас осталось ${difference.toFixed(2)} рублей`;
    } else {
      resultDiv.textContent = `У вас долг в размере ${Math.abs(difference).toFixed(2)} рублей`;
    }
  }
});
