export const statsData = {
  totalIncome: 102000,
  customers: 3,
  employees: 2,
  totalExpenses: 40000,
  incomeChange: 11.07,
  customersChange: 100,
  employeesChange: 100,
  expensesChange: 70.33,
}

export const recentTransactions = [
  { id: 1, customer: 'Sethmi Didulani', type: 'Loan Repayment', date: '6/6/2026', txnType: 'Debit', amount: 2000, positive: true },
  { id: 2, customer: 'Sethmi Didulani', type: 'Loan Disbursement', date: '6/4/2026', txnType: 'Credit', amount: 10000, positive: false },
  { id: 3, customer: 'Intern Salary', type: 'Staff Salary', date: '6/5/2026', txnType: 'Credit', amount: 30000, positive: false },
  { id: 4, customer: 'Initial Investment for May', type: 'Investment', date: '6/5/2026', txnType: 'Debit', amount: 500000, positive: true },
  { id: 5, customer: 'Shanilka Madhwa', type: 'Loan Repayment', date: '3/15/2026', txnType: 'Debit', amount: 30000, positive: true },
  { id: 6, customer: 'Shanilka Madhwa', type: 'Loan Repayment', date: '3/15/2026', txnType: 'Debit', amount: 5000, positive: true },
  { id: 7, customer: 'Shanilka Madhwa', type: 'Loan Repayment', date: '10/17/2024', txnType: 'Debit', amount: 5000, positive: true },
  { id: 8, customer: 'Shanilka Madhwa', type: 'Loan Disbursement', date: '4/15/2024', txnType: 'Credit', amount: 10000, positive: false },
]

export const transactions = [
  { id: 1, date: '6/5/2026', time: '12:52 PM', title: 'Loan Repayment', description: 'Loan repayment - ECL-2026-06-0', customer: 'Sethmi Didulani', user: 'Sethmi Didulani', category: 'Loan Payment', amount: 2000, positive: true },
  { id: 2, date: '6/5/2026', time: '12:52 PM', title: 'Loan Disbursement', description: 'Loan approved and released - ECL', customer: 'Sethmi Didulani', user: 'Sethmi Didulani', category: 'Loan Disbursement', amount: 10000, positive: false },
  { id: 3, date: '6/5/2026', time: '12:51 PM', title: 'Intern Salary', description: 'No description', customer: 'Sethmi Didulani', user: 'Sethmi Didulani', category: 'Staff Salary', amount: 30000, positive: false },
  { id: 4, date: '6/5/2026', time: '12:50 PM', title: 'Initial Investment for May', description: 'No description', customer: 'Sethmi Didulani', user: 'Sethmi Didulani', category: 'Investment Income', amount: 500000, positive: true },
]

export const microLoans = [
  { id: 'ECL-2026-06-00001', date: '2026-06-05', customer: 'Sethmi Didulani', phone: '+94786611863', principal: 10000, total: 12000, paid: 2000, balance: 11000, installments: '1/10', status: 'ACTIVE' },
  { id: 'ECL-2026-05-00006', date: '2026-05-05', customer: 'Sethmi Didulani', phone: '+94712345678', principal: 10000, total: 11500, paid: 0, balance: 11500, installments: '0/14', status: 'OVERDUE' },
  { id: 'ECL-2026-05-00005', date: '2026-05-15', customer: 'Sethmi Didulani', phone: '+94786611863', principal: 5000, total: 5750, paid: 0, balance: 5750, installments: '0/7', status: 'CLOSED' },
  { id: 'ECL-2026-05-00004', date: '2026-05-15', customer: 'Sethmi Didulani', phone: '+94786611863', principal: 5000, total: 5750, paid: 0, balance: 5750, installments: '0/7', status: 'CLOSED' },
  { id: 'ECL-2026-05-00003', date: '2026-05-15', customer: 'Sethmi Didulani', phone: '+94786611863', principal: 5000, total: 5750, paid: 0, balance: 5750, installments: '0/7', status: 'CLOSED' },
  { id: 'ECL-2026-05-00002', date: '2026-05-15', customer: 'Sethmi Didulani', phone: '+94786611863', principal: 5000, total: 5500, paid: 5500, balance: 0, installments: '5/5', status: 'CLOSED' },
  { id: 'ECL-2026-05-00001', date: '2026-05-01', customer: 'Sethmi Didulani', phone: '+94712345678', principal: 10000, total: 13000, paid: 3000, balance: 10000, installments: '1/6', status: 'ACTIVE' },
]

export const customers = [
  { id: 'C-001', name: 'Shanilka Madhawa', phone: '+94786611863', email: 'dmp@email.com', loans: 5, status: 'Active' },
  { id: 'C-002', name: 'Ravi Fernando', phone: '+94712345678', email: 'ravi@email.com', loans: 2, status: 'Active' },
  { id: 'C-003', name: 'Kamal Perera', phone: '+94771234567', email: 'kamal@email.com', loans: 1, status: 'Inactive' },
]

export const employees = [
  { id: 'E-001', name: 'Sethmi Didulani', role: 'Admin', email: 'seth@finexa.com', phone: '+94701234567', status: 'Active' },
  { id: 'E-002', name: 'Nimal Silva', role: 'Loan Officer', email: 'nimal@finexa.com', phone: '+94709876543', status: 'Active' },
]

export const tasks = [
  { id: 1, title: 'Review overdue loans', priority: 'High', due: '2026-06-10', status: 'Pending', assignee: 'Sethmi Didulani' },
  { id: 2, title: 'Call Ravi Fernando', priority: 'High', due: '2026-06-08', status: 'Pending', assignee: 'Nimal Silva' },
  { id: 3, title: 'Monthly report preparation', priority: 'Medium', due: '2026-06-30', status: 'In Progress', assignee: 'Sethmi Didulani' },
  { id: 4, title: 'Update customer records', priority: 'Low', due: '2026-06-15', status: 'Completed', assignee: 'Nimal Silva' },
]

export const premiumLoans = [
  { id: 'PCL-2026-06-00001', date: '2026-06-01', customer: 'High Value Co', phone: '+94770000001', principal: 500000, total: 600000, paid: 50000, balance: 550000, installments: '1/12', status: 'ACTIVE' },
  { id: 'PCL-2026-05-00002', date: '2026-05-15', customer: 'Enterprise Ltd', phone: '+94770000002', principal: 250000, total: 300000, paid: 0, balance: 300000, installments: '0/12', status: 'OVERDUE' },
  { id: 'PCL-2026-04-00003', date: '2026-04-20', customer: 'Startup Inc', phone: '+94770000003', principal: 150000, total: 180000, paid: 180000, balance: 0, installments: '12/12', status: 'CLOSED' },
]

export const reports = [
  { id: 'RPT-001', title: 'Monthly Collection Report', type: 'Collection', generatedDate: '2026-06-01', period: 'May 2026', status: 'Ready', generatedBy: 'Sethmi Didulani' },
  { id: 'RPT-002', title: 'Overdue Loan Report', type: 'Overdue', generatedDate: '2026-06-01', period: 'May 2026', status: 'Ready', generatedBy: 'Sethmi Didulani' },
  { id: 'RPT-003', title: 'Monthly Income Report', type: 'Income', generatedDate: '2026-05-01', period: 'April 2026', status: 'Ready', generatedBy: 'Sethmi Didulani' },
  { id: 'RPT-004', title: 'Loan Disbursement Report', type: 'Disbursement', generatedDate: '2026-05-01', period: 'April 2026', status: 'Ready', generatedBy: 'Sethmi Didulani' },
  { id: 'RPT-005', title: 'Customer Summary Report', type: 'Customer', generatedDate: '2026-04-01', period: 'March 2026', status: 'Ready', generatedBy: 'Sethmi Didulani' },
]

export const ledgers = [
  { id: 'LDG-001', date: '2026-06-05', description: 'Loan Repayment - ECL-2026-06-00001', type: 'Credit', debit: 0, credit: 2000, balance: 502000, category: 'Loan Payment' },
  { id: 'LDG-002', date: '2026-06-05', description: 'Loan Disbursement - ECL-2026-06-00001', type: 'Debit', debit: 10000, credit: 0, balance: 492000, category: 'Loan Disbursement' },
  { id: 'LDG-003', date: '2026-06-05', description: 'Intern Salary Payment', type: 'Debit', debit: 30000, credit: 0, balance: 462000, category: 'Staff Salary' },
  { id: 'LDG-004', date: '2026-06-05', description: 'Initial Investment for May', type: 'Credit', debit: 0, credit: 500000, balance: 962000, category: 'Investment' },
  { id: 'LDG-005', date: '2026-05-15', description: 'Loan Repayment - ECL-2026-05-00001', type: 'Credit', debit: 0, credit: 5000, balance: 957000, category: 'Loan Payment' },
  { id: 'LDG-006', date: '2026-05-15', description: 'Office Rent Payment', type: 'Debit', debit: 15000, credit: 0, balance: 942000, category: 'Expense' },
  { id: 'LDG-007', date: '2026-05-01', description: 'Loan Disbursement - PCL-2026-05-00002', type: 'Debit', debit: 250000, credit: 0, balance: 692000, category: 'Loan Disbursement' },
  { id: 'LDG-008', date: '2026-04-20', description: 'Loan Disbursement - PCL-2026-04-00003', type: 'Debit', debit: 150000, credit: 0, balance: 542000, category: 'Loan Disbursement' },
]