'use client';

import { useState } from 'react';

interface ROIInputs {
  hoursPerAudit: number;
  auditsPerYear: number;
  hourlyRate: number;
  currentToolCost: number;
}

interface ROIResults {
  currentAnnualCost: number;
  picmsCost: number;
  timeSavings: number;
  annualSavings: number;
  roi: number;
  paybackMonths: number;
}

const PICMS_MONTHLY_COST = 299; // Professional plan
const TIME_SAVINGS_PERCENTAGE = 0.70; // 70% time savings

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    hoursPerAudit: 40,
    auditsPerYear: 12,
    hourlyRate: 75,
    currentToolCost: 500,
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROIResults => {
    const currentLabourCost = inputs.hoursPerAudit * inputs.auditsPerYear * inputs.hourlyRate;
    const currentTotalCost = currentLabourCost + inputs.currentToolCost * 12;

    const timeWithPICMS = inputs.hoursPerAudit * (1 - TIME_SAVINGS_PERCENTAGE);
    const labourCostWithPICMS = timeWithPICMS * inputs.auditsPerYear * inputs.hourlyRate;
    const picmsAnnualCost = PICMS_MONTHLY_COST * 12;
    const totalCostWithPICMS = labourCostWithPICMS + picmsAnnualCost;

    const timeSavings = inputs.hoursPerAudit * TIME_SAVINGS_PERCENTAGE * inputs.auditsPerYear;
    const annualSavings = currentTotalCost - totalCostWithPICMS;
    const roi = (annualSavings / picmsAnnualCost) * 100;
    const paybackMonths = annualSavings > 0 ? Math.ceil(picmsAnnualCost / (annualSavings / 12)) : 0;

    return {
      currentAnnualCost: currentTotalCost,
      picmsCost: picmsAnnualCost,
      timeSavings,
      annualSavings,
      roi,
      paybackMonths,
    };
  };

  const results = calculateROI();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-[#001845]/50 border border-[#002366] rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Calculate Your ROI with PICMS
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-[#B0C4DE] mb-4">
            Your Current Situation
          </h4>

          <div>
            <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
              Hours per audit
            </label>
            <input
              type="number"
              value={inputs.hoursPerAudit}
              onChange={(e) => setInputs({ ...inputs, hoursPerAudit: Number(e.target.value) })}
              className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF8C00]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
              Audits per year
            </label>
            <input
              type="number"
              value={inputs.auditsPerYear}
              onChange={(e) => setInputs({ ...inputs, auditsPerYear: Number(e.target.value) })}
              className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF8C00]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
              Average hourly rate (£)
            </label>
            <input
              type="number"
              value={inputs.hourlyRate}
              onChange={(e) => setInputs({ ...inputs, hourlyRate: Number(e.target.value) })}
              className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF8C00]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
              Current tool/software monthly cost (£)
            </label>
            <input
              type="number"
              value={inputs.currentToolCost}
              onChange={(e) => setInputs({ ...inputs, currentToolCost: Number(e.target.value) })}
              className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF8C00]"
            />
          </div>

          <button
            onClick={() => setShowResults(true)}
            className="w-full py-4 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Calculate My ROI
          </button>
        </div>

        {/* Results Section */}
        <div className={`${showResults ? 'opacity-100' : 'opacity-50'} transition-opacity`}>
          <h4 className="text-lg font-semibold text-[#B0C4DE] mb-4">
            Your Potential Savings
          </h4>

          <div className="space-y-4">
            {/* Current Cost */}
            <div className="bg-[#001233]/50 rounded-xl p-4 border border-[#002366]">
              <div className="text-[#8ba3c7] text-sm mb-1">Current Annual Cost</div>
              <div className="text-2xl font-bold text-white">
                {formatCurrency(results.currentAnnualCost)}
              </div>
            </div>

            {/* Time Savings */}
            <div className="bg-[#001233]/50 rounded-xl p-4 border border-[#002366]">
              <div className="text-[#8ba3c7] text-sm mb-1">Time Saved Annually</div>
              <div className="text-2xl font-bold text-[#B0C4DE]">
                {results.timeSavings.toFixed(0)} hours
              </div>
              <div className="text-[#6b8db4] text-sm">70% reduction in audit time</div>
            </div>

            {/* Annual Savings */}
            <div className="bg-gradient-to-r from-[#FF8C00]/10 to-[#e67e00]/10 rounded-xl p-4 border border-[#FF8C00]/30">
              <div className="text-[#FF8C00] text-sm mb-1">Annual Savings</div>
              <div className="text-3xl font-bold text-[#FF8C00]">
                {formatCurrency(results.annualSavings)}
              </div>
            </div>

            {/* ROI */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#001233]/50 rounded-xl p-4 border border-[#002366]">
                <div className="text-[#8ba3c7] text-sm mb-1">ROI</div>
                <div className="text-xl font-bold text-white">
                  {results.roi > 0 ? `${results.roi.toFixed(0)}%` : 'N/A'}
                </div>
              </div>
              <div className="bg-[#001233]/50 rounded-xl p-4 border border-[#002366]">
                <div className="text-[#8ba3c7] text-sm mb-1">Payback Period</div>
                <div className="text-xl font-bold text-white">
                  {results.paybackMonths > 0 ? `${results.paybackMonths} months` : 'Immediate'}
                </div>
              </div>
            </div>

            {/* PICMS Cost */}
            <div className="text-center text-[#8ba3c7] text-sm mt-4">
              PICMS Professional Plan: {formatCurrency(PICMS_MONTHLY_COST)}/month
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[#6b8db4] text-xs text-center mt-6">
        * Estimates based on average customer savings. Actual results may vary depending on your specific circumstances.
      </p>
    </div>
  );
}
