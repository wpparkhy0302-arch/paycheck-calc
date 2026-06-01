// ─── Federal Tax Brackets 2025 ───────────────────────────────────────────────
// Format: [upperBound, rateForThisBracket]
// The bracket applies to income from the previous upper bound up to this upper bound.

export const FEDERAL_BRACKETS = {
  single: [
    [11925,   0.10],
    [48475,   0.12],
    [103350,  0.22],
    [197300,  0.24],
    [250525,  0.32],
    [626350,  0.35],
    [Infinity, 0.37],
  ],
  married: [
    [23850,   0.10],
    [96950,   0.12],
    [206700,  0.22],
    [394600,  0.24],
    [501050,  0.32],
    [751600,  0.35],
    [Infinity, 0.37],
  ],
};

export const FEDERAL_STANDARD_DEDUCTION = {
  single:  15000,
  married: 30000,
};

// Child Tax Credit: $2,000 per qualifying dependent (under 17)
export const CHILD_TAX_CREDIT = 2000;

// ─── FICA ────────────────────────────────────────────────────────────────────
export const SS_RATE      = 0.062;
export const SS_WAGE_BASE = 176100; // 2025 Social Security wage base
export const MEDICARE_RATE               = 0.0145;
export const ADDITIONAL_MEDICARE_RATE    = 0.009;
export const ADDITIONAL_MEDICARE_THRESHOLD = { single: 200000, married: 250000 };

// ─── State Tax Data 2024 ─────────────────────────────────────────────────────
// type: 'none' | 'flat' | 'brackets'
// For 'flat': rate applies to taxable income (gross - deduction)
// For 'brackets': brackets array is [upperBound, rate]
// deduction: state standard deduction (0 if none)

export const STATE_TAX = {

  AL: {
    name: 'Alabama', type: 'brackets',
    single:  { deduction: 2500, brackets: [[500, 0.02], [3000, 0.04], [Infinity, 0.05]] },
    married: { deduction: 7500, brackets: [[1000, 0.02], [6000, 0.04], [Infinity, 0.05]] },
  },

  AK: { name: 'Alaska',  type: 'none' },

  AZ: {
    name: 'Arizona', type: 'flat', rate: 0.025,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  AR: {
    name: 'Arkansas', type: 'brackets',
    single:  { deduction: 2200, brackets: [[4300, 0.02], [8500, 0.04], [Infinity, 0.044]] },
    married: { deduction: 4400, brackets: [[4300, 0.02], [8500, 0.04], [Infinity, 0.044]] },
  },

  CA: {
    name: 'California', type: 'brackets',
    single: {
      deduction: 4803,
      brackets: [
        [10412,   0.01],  [24684,   0.02],  [38959,  0.04],
        [54081,   0.06],  [68350,   0.08],  [349137, 0.093],
        [418961,  0.103], [698271,  0.113], [1000000, 0.123],
        [Infinity, 0.133],
      ],
    },
    married: {
      deduction: 9606,
      brackets: [
        [20824,   0.01],  [49368,   0.02],  [77918,  0.04],
        [108162,  0.06],  [136700,  0.08],  [698274, 0.093],
        [837922,  0.103], [1000000, 0.113],
        [Infinity, 0.123],
      ],
    },
  },

  CO: {
    name: 'Colorado', type: 'flat', rate: 0.044,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  CT: {
    name: 'Connecticut', type: 'brackets',
    single: {
      deduction: 15000,
      brackets: [
        [10000,    0.03],  [50000,   0.05],  [100000, 0.055],
        [200000,   0.06],  [250000,  0.065], [500000, 0.069],
        [Infinity, 0.0699],
      ],
    },
    married: {
      deduction: 24000,
      brackets: [
        [20000,    0.03],  [100000,  0.05],  [200000,  0.055],
        [400000,   0.06],  [500000,  0.065], [1000000, 0.069],
        [Infinity, 0.0699],
      ],
    },
  },

  DE: {
    name: 'Delaware', type: 'brackets',
    single: {
      deduction: 3250,
      brackets: [
        [2000,    0],      [5000,    0.022], [10000,  0.039],
        [20000,   0.048],  [25000,   0.052], [60000,  0.055],
        [Infinity, 0.066],
      ],
    },
    married: {
      deduction: 6500,
      brackets: [
        [2000,    0],      [5000,    0.022], [10000,  0.039],
        [20000,   0.048],  [25000,   0.052], [60000,  0.055],
        [Infinity, 0.066],
      ],
    },
  },

  FL: { name: 'Florida',  type: 'none' },

  GA: {
    name: 'Georgia', type: 'flat', rate: 0.0549,
    single:  { deduction: 12000 },
    married: { deduction: 24000 },
  },

  HI: {
    name: 'Hawaii', type: 'brackets',
    single: {
      deduction: 2200,
      brackets: [
        [2400,    0.014], [4800,    0.032], [9600,    0.055],
        [14400,   0.064], [19200,   0.068], [24000,   0.072],
        [36000,   0.076], [48000,   0.079], [150000,  0.0825],
        [175000,  0.09],  [200000,  0.10],  [Infinity, 0.11],
      ],
    },
    married: {
      deduction: 4400,
      brackets: [
        [4800,    0.014], [9600,    0.032], [19200,   0.055],
        [28800,   0.064], [38400,   0.068], [48000,   0.072],
        [72000,   0.076], [96000,   0.079], [300000,  0.0825],
        [350000,  0.09],  [400000,  0.10],  [Infinity, 0.11],
      ],
    },
  },

  ID: {
    name: 'Idaho', type: 'flat', rate: 0.058,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  IL: {
    name: 'Illinois', type: 'flat', rate: 0.0495,
    single:  { deduction: 0 },
    married: { deduction: 0 },
  },

  IN: {
    name: 'Indiana', type: 'flat', rate: 0.0305,
    single:  { deduction: 1000 },
    married: { deduction: 2000 },
  },

  IA: {
    name: 'Iowa', type: 'flat', rate: 0.044,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  KS: {
    name: 'Kansas', type: 'brackets',
    single: {
      deduction: 3500,
      brackets: [[15000, 0.031], [30000, 0.0525], [Infinity, 0.057]],
    },
    married: {
      deduction: 8000,
      brackets: [[30000, 0.031], [60000, 0.0525], [Infinity, 0.057]],
    },
  },

  KY: {
    name: 'Kentucky', type: 'flat', rate: 0.04,
    single:  { deduction: 3160 },
    married: { deduction: 3160 },
  },

  LA: {
    name: 'Louisiana', type: 'brackets',
    single: {
      deduction: 4500,
      brackets: [[12500, 0.0185], [50000, 0.035], [Infinity, 0.0425]],
    },
    married: {
      deduction: 9000,
      brackets: [[25000, 0.0185], [100000, 0.035], [Infinity, 0.0425]],
    },
  },

  ME: {
    name: 'Maine', type: 'brackets',
    single: {
      deduction: 14600,
      brackets: [[24500, 0.058], [58050, 0.0675], [Infinity, 0.0715]],
    },
    married: {
      deduction: 29200,
      brackets: [[49000, 0.058], [116100, 0.0675], [Infinity, 0.0715]],
    },
  },

  MD: {
    name: 'Maryland', type: 'brackets',
    single: {
      deduction: 2400,
      brackets: [
        [1000,    0.02],  [2000,    0.03],  [3000,    0.04],
        [100000,  0.0475],[125000,  0.05],  [150000,  0.0525],
        [250000,  0.055], [Infinity, 0.0575],
      ],
    },
    married: {
      deduction: 4800,
      brackets: [
        [1000,    0.02],  [2000,    0.03],  [3000,    0.04],
        [150000,  0.0475],[175000,  0.05],  [225000,  0.0525],
        [300000,  0.055], [Infinity, 0.0575],
      ],
    },
  },

  MA: {
    name: 'Massachusetts', type: 'flat', rate: 0.05,
    single:  { deduction: 4400 },
    married: { deduction: 8800 },
  },

  MI: {
    name: 'Michigan', type: 'flat', rate: 0.0425,
    single:  { deduction: 5600 },
    married: { deduction: 11200 },
  },

  MN: {
    name: 'Minnesota', type: 'brackets',
    single: {
      deduction: 14575,
      brackets: [[31690, 0.0535], [104090, 0.068], [171220, 0.0785], [Infinity, 0.0985]],
    },
    married: {
      deduction: 29150,
      brackets: [[46330, 0.0535], [184040, 0.068], [311070, 0.0785], [Infinity, 0.0985]],
    },
  },

  MS: {
    name: 'Mississippi', type: 'flat', rate: 0.047,
    single:  { deduction: 2300 },
    married: { deduction: 4600 },
  },

  MO: {
    name: 'Missouri', type: 'brackets',
    single: {
      deduction: 14600,
      brackets: [
        [1121,    0],     [2242,    0.015], [3363,    0.02],
        [4484,    0.025], [5605,    0.03],  [6726,    0.035],
        [7847,    0.04],  [8968,    0.045], [Infinity, 0.048],
      ],
    },
    married: {
      deduction: 29200,
      brackets: [
        [1121,    0],     [2242,    0.015], [3363,    0.02],
        [4484,    0.025], [5605,    0.03],  [6726,    0.035],
        [7847,    0.04],  [8968,    0.045], [Infinity, 0.048],
      ],
    },
  },

  MT: {
    name: 'Montana', type: 'flat', rate: 0.0675,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  NE: {
    name: 'Nebraska', type: 'brackets',
    single: {
      deduction: 7900,
      brackets: [[3700, 0.0246], [22170, 0.0351], [35730, 0.0501], [Infinity, 0.0664]],
    },
    married: {
      deduction: 15800,
      brackets: [[7390, 0.0246], [44350, 0.0351], [71460, 0.0501], [Infinity, 0.0664]],
    },
  },

  NV: { name: 'Nevada',         type: 'none' },
  NH: { name: 'New Hampshire',  type: 'none' },

  NJ: {
    name: 'New Jersey', type: 'brackets',
    single: {
      deduction: 1000,
      brackets: [
        [20000,    0.014],  [35000,   0.0175], [40000,    0.035],
        [75000,    0.05525],[500000,  0.0637], [1000000,  0.0897],
        [Infinity, 0.1075],
      ],
    },
    married: {
      deduction: 2000,
      brackets: [
        [20000,    0.014],  [50000,   0.0175], [70000,    0.0245],
        [80000,    0.035],  [150000,  0.05525],[500000,   0.0637],
        [1000000,  0.0897], [Infinity, 0.1075],
      ],
    },
  },

  NM: {
    name: 'New Mexico', type: 'brackets',
    single: {
      deduction: 14600,
      brackets: [[5500, 0.017], [11000, 0.032], [16000, 0.047], [210000, 0.049], [Infinity, 0.059]],
    },
    married: {
      deduction: 29200,
      brackets: [[8000, 0.017], [16000, 0.032], [24000, 0.047], [315000, 0.049], [Infinity, 0.059]],
    },
  },

  NY: {
    name: 'New York', type: 'brackets',
    single: {
      deduction: 8000,
      brackets: [
        [17150,    0.04],   [23600,    0.045],  [27900,    0.0525],
        [161550,   0.0585], [323200,   0.0625], [2155350,  0.0685],
        [5000000,  0.0965], [25000000, 0.103],  [Infinity, 0.109],
      ],
    },
    married: {
      deduction: 16050,
      brackets: [
        [23600,    0.04],   [27900,    0.045],  [43150,    0.0525],
        [161550,   0.0585], [323200,   0.0625], [2155350,  0.0685],
        [5000000,  0.0965], [25000000, 0.103],  [Infinity, 0.109],
      ],
    },
  },

  NC: {
    name: 'North Carolina', type: 'flat', rate: 0.045,
    single:  { deduction: 12750 },
    married: { deduction: 25500 },
  },

  ND: {
    name: 'North Dakota', type: 'brackets',
    single: {
      deduction: 14600,
      brackets: [[44725, 0.011], [225975, 0.0204], [Infinity, 0.025]],
    },
    married: {
      deduction: 29200,
      brackets: [[74750, 0.011], [275100, 0.0204], [Infinity, 0.025]],
    },
  },

  OH: {
    name: 'Ohio', type: 'brackets',
    single: {
      deduction: 2400,
      brackets: [[26050, 0], [100000, 0.0275], [Infinity, 0.0399]],
    },
    married: {
      deduction: 4800,
      brackets: [[26050, 0], [100000, 0.0275], [Infinity, 0.0399]],
    },
  },

  OK: {
    name: 'Oklahoma', type: 'brackets',
    single: {
      deduction: 6350,
      brackets: [
        [1000, 0.0025], [2500, 0.0075], [3750, 0.0175],
        [4900, 0.0275], [7200, 0.0375], [Infinity, 0.0475],
      ],
    },
    married: {
      deduction: 12700,
      brackets: [
        [2000, 0.0025], [5000, 0.0075], [7500, 0.0175],
        [9800, 0.0275], [12200, 0.0375],[Infinity, 0.0475],
      ],
    },
  },

  OR: {
    name: 'Oregon', type: 'brackets',
    single: {
      deduction: 2420,
      brackets: [[18400, 0.0475], [46200, 0.0675], [250000, 0.0875], [Infinity, 0.099]],
    },
    married: {
      deduction: 4840,
      brackets: [[36800, 0.0475], [92400, 0.0675], [500000, 0.0875], [Infinity, 0.099]],
    },
  },

  PA: {
    name: 'Pennsylvania', type: 'flat', rate: 0.0307,
    single:  { deduction: 0 },
    married: { deduction: 0 },
  },

  RI: {
    name: 'Rhode Island', type: 'brackets',
    single: {
      deduction: 10550,
      brackets: [[73450, 0.0375], [166950, 0.0475], [Infinity, 0.0599]],
    },
    married: {
      deduction: 21150,
      brackets: [[73450, 0.0375], [166950, 0.0475], [Infinity, 0.0599]],
    },
  },

  SC: {
    name: 'South Carolina', type: 'flat', rate: 0.064,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  SD: { name: 'South Dakota', type: 'none' },
  TN: { name: 'Tennessee',    type: 'none' },
  TX: { name: 'Texas',        type: 'none' },

  UT: {
    name: 'Utah', type: 'flat', rate: 0.0465,
    single:  { deduction: 14600 },
    married: { deduction: 29200 },
  },

  VT: {
    name: 'Vermont', type: 'brackets',
    single: {
      deduction: 6550,
      brackets: [[45400, 0.0335], [110050, 0.066], [229550, 0.076], [Infinity, 0.0875]],
    },
    married: {
      deduction: 13100,
      brackets: [[75850, 0.0335], [183400, 0.066], [236350, 0.076], [Infinity, 0.0875]],
    },
  },

  VA: {
    name: 'Virginia', type: 'brackets',
    single: {
      deduction: 8000,
      brackets: [[3000, 0.02], [5000, 0.03], [17000, 0.05], [Infinity, 0.0575]],
    },
    married: {
      deduction: 16000,
      brackets: [[3000, 0.02], [5000, 0.03], [17000, 0.05], [Infinity, 0.0575]],
    },
  },

  WA: { name: 'Washington', type: 'none' },

  WV: {
    name: 'West Virginia', type: 'brackets',
    single: {
      deduction: 2000,
      brackets: [[10000, 0.0236], [25000, 0.032], [40000, 0.045], [60000, 0.048], [Infinity, 0.0512]],
    },
    married: {
      deduction: 4000,
      brackets: [[10000, 0.0236], [25000, 0.032], [40000, 0.045], [60000, 0.048], [Infinity, 0.0512]],
    },
  },

  WI: {
    name: 'Wisconsin', type: 'brackets',
    single: {
      deduction: 14600,
      brackets: [[13810, 0.0354], [27630, 0.0465], [304170, 0.053], [Infinity, 0.0765]],
    },
    married: {
      deduction: 29200,
      brackets: [[18420, 0.0354], [36840, 0.0465], [405550, 0.053], [Infinity, 0.0765]],
    },
  },

  WY: { name: 'Wyoming', type: 'none' },
};

// ─── Helpers (used by the client-side calculator script) ─────────────────────

/**
 * Calculate tax using progressive brackets.
 * @param {number} income - taxable income
 * @param {Array<[number, number]>} brackets - [upperBound, rate]
 */
export function calcBracketTax(income, brackets) {
  if (income <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (const [limit, rate] of brackets) {
    if (income <= prev) break;
    const taxable = Math.min(income, limit) - prev;
    tax += taxable * rate;
    prev = limit;
  }
  return tax;
}

/**
 * Calculate federal income tax.
 */
export function calcFederalTax(gross, filingStatus, dependents) {
  const deduction = FEDERAL_STANDARD_DEDUCTION[filingStatus] ?? FEDERAL_STANDARD_DEDUCTION.single;
  const taxable = Math.max(0, gross - deduction);
  const brackets = FEDERAL_BRACKETS[filingStatus] ?? FEDERAL_BRACKETS.single;
  let tax = calcBracketTax(taxable, brackets);
  // Apply Child Tax Credit (up to $2,000 per dependent, cannot exceed tax liability)
  const ctc = Math.min(dependents * CHILD_TAX_CREDIT, tax);
  return Math.max(0, tax - ctc);
}

/**
 * Calculate state income tax.
 */
export function calcStateTax(gross, stateCode, filingStatus) {
  const state = STATE_TAX[stateCode];
  if (!state || state.type === 'none') return 0;

  const statusKey = filingStatus === 'married' ? 'married' : 'single';
  const cfg = state[statusKey] ?? state.single;
  const deduction = cfg?.deduction ?? 0;
  const taxable = Math.max(0, gross - deduction);

  if (state.type === 'flat') return taxable * state.rate;
  if (state.type === 'brackets') return calcBracketTax(taxable, cfg.brackets);
  return 0;
}

/**
 * Calculate FICA (Social Security + Medicare).
 */
export function calcFICA(gross, filingStatus) {
  const ss = Math.min(gross, SS_WAGE_BASE) * SS_RATE;
  const medicare = gross * MEDICARE_RATE;
  const addlMedicareThreshold = ADDITIONAL_MEDICARE_THRESHOLD[filingStatus] ?? ADDITIONAL_MEDICARE_THRESHOLD.single;
  const addlMedicare = Math.max(0, gross - addlMedicareThreshold) * ADDITIONAL_MEDICARE_RATE;
  return { ss, medicare: medicare + addlMedicare };
}

/**
 * Master calculation — returns all components as annual amounts.
 */
export function calculatePaycheck({ gross, stateCode, filingStatus, dependents }) {
  const federalTax  = calcFederalTax(gross, filingStatus, dependents);
  const stateTax    = calcStateTax(gross, stateCode, filingStatus);
  const { ss, medicare } = calcFICA(gross, filingStatus);
  const totalDeductions = federalTax + stateTax + ss + medicare;
  const netPay = gross - totalDeductions;
  return { gross, federalTax, stateTax, ss, medicare, totalDeductions, netPay };
}
