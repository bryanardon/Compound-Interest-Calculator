const principalBox = document.querySelector("#principal")
const interestRateBox = document.querySelector("#interest")
const compoundBox = document.querySelector("#compound")
const timeBox = document.querySelector("#time")
const compoundInterestRateSpan = document.querySelector("#CIR");
const profitSpan = document.querySelector("#profit")

function computeCompoundInterestRate() {
  const principal = principalBox.value
  const interestRate = interestRateBox.value / 100
  const compound = compoundBox.value
  const time = timeBox.value
  const compoundInterestRate = principal * (1 + interestRate / compound) ** (compound * time);
  compoundInterestRateSpan.textContent = Number.parseFloat(compoundInterestRate).toFixed(2);
  profitSpan.textContent = Number.parseFloat(compoundInterestRate - principal).toFixed(2)
}

principalBox.addEventListener('input', computeCompoundInterestRate)
interestRateBox.addEventListener('input', computeCompoundInterestRate)
compoundBox.addEventListener('input', computeCompoundInterestRate)
timeBox.addEventListener('input', computeCompoundInterestRate)
