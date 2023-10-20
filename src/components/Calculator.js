import React, { useState } from 'react';
import CashImg from '../images/Cash.jpg'

function InvestmentCalculator() {
    
    const [investmentType, setInvestmentType] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [resultSentence, setResultSentence] = useState('');

    const handleInvestmentTypeChange = (type) => {
        setInvestmentType(type);
        if (type === 'S&P 500') {
        setAnnualReturn('10.11');
        }
        else if (type === 'Roth IRA') {
        setAnnualReturn('8.5');
        } 
        else if (type === 'Crypto') {
            setAnnualReturn('5');
        }
        else if (type === 'Stocks') {
            setAnnualReturn('10');
        }
        else if (type === 'Commodity') {
            setAnnualReturn('15.13');
        }
        else if (type === 'Index Fund') {
            setAnnualReturn('6.7');
        }
        else if (type === 'Bonds') {
            setAnnualReturn('5.5');
        }
        else {
        setAnnualReturn('1');
        }
    };

    const handleCalculate = () => {

        const userName = document.getElementById('user_name').value;
        const investmentPeriod = parseInt(document.getElementById('investment-period').value, 10);
        const initialInvestment = parseFloat(document.getElementById('initial_investment').value);
        const annualReturn = parseFloat(document.getElementById('annual-return').value);
        const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
      
        const totalInvestment = (initialInvestment * (Math.pow(1 + annualReturn / 100, investmentPeriod))) +
    (monthlyContribution * ((Math.pow(1 + (annualReturn / 100), investmentPeriod) - 1) / (annualReturn / 100)));
      
        const result = `Hey ${userName}. You have chosen to invest in ${investmentType}. Over a period of ${investmentPeriod} years, and with an annual return rate of ${annualReturn}%, your total investment is going to be $${totalInvestment.toFixed(2)}.`;
      
        setResultSentence(result);
      };
    

    return (
        <div>
            <div class="max-w-2xl justify-center items-center m-auto mt-28 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800">
                <a href="#">
                    <img class="rounded-t-3xl text-sm h-10 w-full bg-contain bg-center object-cover" src={CashImg} alt="" />
                </a>
                <div class="p-5 mt-2">
                    <a href="#">
                        <h5 class="align-center text-center mb-2 text-2xl font-bold tracking-tight text-white">Financial Calculator</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The only calculator you will ever need, packed with a precise algortihm that accepts numerous inputs fields to give you a combination of flexibility and robust precision.</p>
                </div>

                <div class="w-[95%] justify-center items-center m-auto">
                
                    <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                    <input type="text" id="user_name" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"/>

                    <label for="helper-text" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Age</label>
                    <input type="text" id="user_age" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age"/>

                    <label for="helper-text" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Initial Investment</label>
                    <input type="text" id="initial_investment" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$1000"/>
                    
                    <label for="helper-text" class="mt-4 block mb-3 text-sm font-medium text-gray-900 dark:text-white"> Type of Investment</label>
                    <button onClick={() => handleInvestmentTypeChange('S&P 500')} class="bg-blue-100 text-blue-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:ring-2 ring-blue-800">S&P 500</button>
                    <button onClick={() => handleInvestmentTypeChange('Roth IRA')} class="bg-purple-100 text-purple-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-purple-900 dark:text-purple-300 hover:ring-2 ring-purple-800">Roth IRA</button>
                    <button onClick={() => handleInvestmentTypeChange('Crypto')} class="bg-red-100 text-red-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-red-900 dark:text-red-300 hover:ring-2 ring-red-800">Crypto</button>
                    <button onClick={() => handleInvestmentTypeChange('Stocks')} class="bg-green-100 text-green-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300 hover:ring-2 ring-green-800">Stock</button>
                    <button onClick={() => handleInvestmentTypeChange('Commodity')} class="bg-yellow-100 text-yellow-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 hover:ring-2 ring-yellow-800">Commodity</button>
                    <button onClick={() => handleInvestmentTypeChange('Index Fund')} class="bg-indigo-100 text-indigo-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 hover:ring-2 ring-indigo-800">Index Fund</button>
                    <button onClick={() => handleInvestmentTypeChange('Bonds')} class="bg-pink-100 text-pink-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-pink-900 dark:text-pink-300 hover:ring-2 ring-pink-800">Bonds</button>
                    <button onClick={() => handleInvestmentTypeChange('S')} class="bg-pink-100 text-pink-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-orange-800 dark:text-pink-300 hover:ring-2 ring-pink-800 my-4">Custom</button>

                    <label for="helper-text" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Contribution</label>
                    <input type="text" id="monthly-contribution" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$100"/>

                    <label for="helper-text" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Annual return</label>
                    <input type="text" id="annual-return" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 5%"/>

                    <label for="helper-text" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Investment period (years)</label>
                    <input type="text" id="investment-period" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 2"/>

                </div>

                <button href="#" onClick={handleCalculate} class="ml-4 mt-8 mb-10 inline-flex items-center px-16 py-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Calculate
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>

            </div>

            <div class="text-center mt-12 mb-12 text-3xl max-w-7xl m-auto">{resultSentence}</div>
            
            
        </div>
    )
}

export default InvestmentCalculator