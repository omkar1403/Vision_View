import React, { useState } from 'react';
import './carwrap.css'

function BudgetCalculator() {
    const [salary, setSalary] = useState('');
    const [strategy, setStrategy] = useState('');
    const [recommendations, setRecommendations] = useState('');

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const handleStrategyChange = (event) => {
        setStrategy(event.target.value);
    };

    const calculateRecommendations = () => {
        const monthlySalary = parseFloat(salary);
        if (!isNaN(monthlySalary) && monthlySalary > 0 && strategy !== '') {
            let needs, wants, savings, living, debtReduction;
            let recommendedAllocation = '';

            if (strategy === '1') {
                needs = monthlySalary * 0.5;
                wants = monthlySalary * 0.3;
                savings = monthlySalary * 0.2;
                recommendedAllocation =
                    monthlySalary < 60000 ? '50/30/20' : '70/20/10';
            } else if (strategy === '2') {
                living = monthlySalary * 0.7;
                debtReduction = monthlySalary * 0.2;
                savings = monthlySalary * 0.1;
                recommendedAllocation =
                    monthlySalary < 50000 ? '70/20/10' : '50/30/20';
            } else if (strategy === '3') {
                needs = monthlySalary * 0.6;
                savings = monthlySalary * 0.2;
                wants = monthlySalary * 0.2;
                recommendedAllocation =
                    monthlySalary < 40000 ? '60/20/20' : '50/30/20';
            }

            const recommendationText = `Recommended Allocations:\n${strategy === '1'
                ? `Needs: ${needs.toFixed(2)}\nWants: ${wants.toFixed(
                    2
                )}\nSavings: ${savings.toFixed(2)}`
                : strategy === '2'
                    ? `Living Expenses: ${living.toFixed(2)}\nDebt Reduction: ${debtReduction.toFixed(
                        2
                    )}\nSavings: ${savings.toFixed(2)}`
                    : strategy === '3'
                        ? `Needs: ${needs.toFixed(2)}\nSavings: ${savings.toFixed(
                            2
                        )}\nWants: ${wants.toFixed(2)}`
                        : ''
                }`;

            setRecommendations(`Recommended for buying a ${recommendationText}`);
        } else {
            setRecommendations('Invalid input. Please enter a valid salary and choose a strategy.');
        }
    };

    return (


        <div id='budget'>
            <h1 id='hf'>Financial Architect</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='rtr'>
                <p className='npms'><b className='pop'>1)70/20/10 Strategy</b>:70% for living expenses such as rent/mortgage, utilities, groceries,  20% for debt reduction such as paying off credit card or student loan debt
                    10% for savings such as emergency fund, retirement</p>

                <p className='npms'> <b className='pop'>2)50/30/20 Strategy</b>:    50% for needs such as rent/mortgage, utilities, groceries
                    30% for wants such as dining out, entertainment, shopping
                    20% for savings such as emergency fund, retirement, debt repayment</p>

                <p className='npms'> <b className='pop'>3) 60/20/20 Strategy</b>: 60% for needs such as rent/mortgage, utilities, groceries
                    20% for savings such as emergency fund, retirement, debt repayment
                    20% for wants such as dining out, entertainment, shopping</p>
            </div>
            <div className='nude'>
                <label className='jgh'>
                    Enter your monthly salary:
                    <input type="number" value={salary} onChange={handleSalaryChange} />
                </label>


                <div>Choose a budgeting strategy:</div>
                <br />
                <br />

                <div className='iro'>
                    <div className='radio-container'>

                        <label for="bv">
                            <input
                                type="radio"
                                value="1"
                                id="bv"
                                name="strategy"
                                checked={strategy === '1'}
                                onChange={handleStrategyChange}
                            />
                            50/30/20: Needs/Wants/Savings
                        </label>

                    </div >
                    <br />
                    <div className='radio-container'>
                        <label for="xsss">
                            <input
                                type="radio"
                                id="xsss"
                                name="strategy"
                                value="2"
                                checked={strategy === '2'}
                                onChange={handleStrategyChange}
                            />
                            70/20/10: Living/Reduce/Savings
                        </label>
                        {/* Include the other strategy options similarly */}

                    </div>
                    <br />
                    <div className='radio-container'>
                        <label for="xscs">
                            <input
                                type="radio"
                                id="xscs"
                                name="strategy"
                                value="3"
                                checked={strategy === '3'}
                                onChange={handleStrategyChange}
                            />
                            60/20/20: Needs/Savings/wants
                        </label>
                        {/* Include the other strategy options similarly */}

                    </div>
                </div>
            </div>

            <button id='bgtm' onClick={calculateRecommendations}>Calculate</button>

            <div className='nsj'><b>{recommendations}</b></div>

        </div>
    )
}

export default BudgetCalculator;