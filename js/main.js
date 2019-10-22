// DOM elements

const targetDailyExpenseField = document.getElementById("target-expense");
const averageDailyExpenseField = document.getElementById("average-expense");
const canvas = document.getElementById("canvas");

const vExpense = document.getElementById("variable-expense");
const fExpense = document.getElementById("fixed-input");
const incomeField = document.getElementById("income");

const budgetRule = document.getElementById("budget-rule");
const singleTargetType = document.querySelector(".target");
const singleRules = document.getElementsByName('rule2');

const minTreshold = document.getElementById("min-treshold");
const maxTreshold = document.getElementById("max-treshold");
const periodSelection = document.getElementById("period");

document.getElementById("budget-planner").addEventListener('change', calculateTarget);

function getSelectedRule() {

    let selectedRule = 'budget-rule';

    if(event.target.id === 'budget-rule'){
        singleTargetType.classList.add('invisible');
        selectedRule = 'budget-rule';
    }
    else if(event.target.id === 'single-target'){
        singleTargetType.classList.remove('invisible');
        selectedRule = (singleRules[1].checked) ? 'target-savings' : 'target-expenses';
    }
    else if(event.target.id === 'expenses'){
        selectedRule = 'target-expenses';
    }
    else if(event.target.id === 'savings'){
        selectedRule = 'target-savings';
    }

    return selectedRule;
}

function calculateTarget() {
    let variable = vExpense.value;
    let fixed = fExpense.value;
    let income = incomeField.value;
    let min = minTreshold.value;
    let max = maxTreshold.value;

    let selectedRule = getSelectedRule();

    let needs = 0.5 * income;
    let savings = 0.2 * income;
    let wants = 0.3 * income;
    let averageDailyExpense = [variable];       // array type selected just for a single value to take advantage of mutating value
                                             //temporarly assigned to variable- exact value should be determined depending on the previous variable expenses for the month
    let dailyExeedence = [0];                   // array type selected just for a single value to take advantage of mutating value
    let targetDailyExpense = [Math.round( (income - needs - savings + dailyExeedence) / 30 )];  // array type selected just for a single value to take advantage of mutating value

    let allFieldsAreValid = (variable && fixed && income && min && max);

    dailyExeedence[0] = targetDailyExpense[0] - averageDailyExpense[0];
    targetDailyExpense[0] = Math.round( (income - needs - savings + dailyExeedence[0]) / 30 );

    if(targetDailyExpense[0] < min) targetDailyExpense[0] = min;
    else if(targetDailyExpense[0] > max) targetDailyExpense[0] = max;

    if(allFieldsAreValid)
        targetDailyExpenseField.innerText = `${targetDailyExpense[0]}$`;
    
}
