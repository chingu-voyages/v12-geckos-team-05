// DOM elements

const targetDailyExpense = document.getElementById("target-expense");
const averageDailyExpense = document.getElementById("average-expense");
const canvas = document.getElementById("canvas");

const vExpense = document.getElementById("variable-expense");
const fExpense = document.getElementById("fixed-expenses-list");
const incomeField = document.getElementById("income");

const budgetRule = document.getElementById("budget-rule");
const singleTarget = document.getElementById("single-target");
const singleTargetTypes = document.getElementsByClassName("target")

const minTreshold = document.getElementById("min-treshold");
const maxTreshold = document.getElementById("max-treshold");
const periodSelection = document.getElementById("period");

document.getElementById("budget-planner").addEventListener('change', calculateTarget);

function calculateTarget() {
    let variable = vExpense.value;
    let fixed = fExpense.value;
    let income = incomeField.value;
    let min = minTreshold.value;
    let max = maxTreshold.value;
    let savings = 0.2 * income;
    let needs = fixed;
    let targetExpense = (income - needs - savings) / 30;

    //if(targetExpense < min) targetExpense = min;
    //else if(targetExpense > max) targetExpense = max;

    targetDailyExpense.innerText = `${targetExpense}$`;
}
