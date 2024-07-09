

const companyDropdown = document.getElementById('companyDropdown');
const accountDropdown = document.getElementById('accountDropdown');
const loadTable = document.getElementById('loadTable');
const balanceAmount = document.getElementById('balanceAmount');

// Data for companies and accounts
const companyData = {
    "Company A": {
        "Account 1": {
            "balance": 8888888888,
            "loads": [
                { "date": "07/05/2024 01:04 AM", "credit": 21337, "balance": 21337, "utr": 1000000, "upi": "AC0CF7RRUY407QHU" },
                { "date": "04/05/2024 02:05 AM", "credit": 21337, "balance": 21337, "utr": "CMS4136431811", "upi": "0104SLNEFTPL" },
                { "date": "28/03/2024 03:08 AM", "credit": 21337, "balance": 21337, "utr": "CMS4019645011", "upi": "ACT861VM9RR67Z5C" },
                { "date": "28/03/2024 04:06 AM", "credit": 5015.69, "balance": 5015.69, "utr": "CMS3956666735", "upi": "AC0CF7RRUY407QHU" },
                { "date": "19/03/2024 05:09 AM", "credit": 5015.69, "balance": 5015.69, "utr": "CMS3948064984", "upi": "ACT861VM9RR67Z5C" },
                { "date": "19/03/2024 06:07 AM", "credit": 16000, "balance": 16000, "utr": "CMS3938564916", "upi": "AC0CF7RRUY407QHU" }
            ]
        },
        "Account 2": {
            "balance": 100000000,
            "loads": [
                { "date": "01/04/2024 06:04 AM", "credit": 10000, "balance": 10000, "utr": 1000000, "upi": "AC0CF7RRUY407QHU" },
                { "date": "02/04/2024 07:06 AM", "credit": 20000, "balance": 20000, "utr": "CMS4136431811", "upi": "0104SLNEFTPL" },
                { "date": "03/04/2024 08:07 AM", "credit": 30000, "balance": 30000, "utr": "CMS4019645011", "upi": "ACT861VM9RR67Z5C" },
                { "date": "04/04/2024 09:08 AM", "credit": 40000, "balance": 40000, "utr": "CMS3956666735", "upi": "AC0CF7RRUY407QHU" },
                { "date": "05/04/2024 10:04 AM", "credit": 50000, "balance": 50000, "utr": "CMS3948064984", "upi": "ACT861VM9RR67Z5C" },
                { "date": "06/04/2024 11:09 AM", "credit": 60000, "balance": 60000, "utr": "CMS3938564916", "upi": "AC0CF7RRUY407QHU" }
            ]
        }
    },
    "Company B": {
        "Account 1": {
            "balance": 200000000,
            "loads": [
                { "date": "01/04/2024 11:10 AM", "credit": 60000, "balance": 60000, "utr": 1000000, "upi": "AC0CF7RRUY407QHU" },
                { "date": "02/04/2024 12:20 PM", "credit": 50000, "balance": 50000, "utr": "CMS4136431811", "upi": "0104SLNEFTPL" },
                { "date": "03/04/2024 13:30 PM", "credit": 40000, "balance": 40000, "utr": "CMS4019645011", "upi": "ACT861VM9RR67Z5C" },
                { "date": "04/04/2024 14:40 PM", "credit": 30000, "balance": 30000, "utr": "CMS3956666735", "upi": "AC0CF7RRUY407QHU" },
                { "date": "05/04/2024 15:50 PM", "credit": 20000, "balance": 20000, "utr": "CMS3948064984", "upi": "ACT861VM9RR67Z5C" },
                { "date": "06/04/2024 16:59 PM", "credit": 10000, "balance": 10000, "utr": "CMS3938564916", "upi": "AC0CF7RRUY407QHU" }
            ]
        },
        "Account 2": {
            "balance": 670000000,
            "loads": [
                { "date": "01/04/2024 17:34 PM", "credit": 21000, "balance": 21000, "utr": 1000000, "upi": "AC0CF7RRUY407QHU" },
                { "date": "02/04/2024 18:24 PM", "credit": 38000, "balance": 38000, "utr": "CMS4136431811", "upi": "0104SLNEFTPL" },
                { "date": "03/04/2024 19:54 PM", "credit": 42000, "balance": 42000, "utr": "CMS4019645011", "upi": "ACT861VM9RR67Z5C" },
                { "date": "04/04/2024 20:14 PM", "credit": 39000, "balance": 39000, "utr": "CMS3956666735", "upi": "AC0CF7RRUY407QHU" },
                { "date": "05/04/2024 21:44 PM", "credit":25000, "balance":25000, "utr": "CMS3948064984", "upi": "ACT861VM9RR67Z5C" },
                { "date": "06/04/2024 22:114 PM", "credit": 62000, "balance": 62000, "utr": "CMS3938564916", "upi": "AC0CF7RRUY407QHU" }
            ]
        }
    }
};

// Function to update account dropdown based on selected company
function updateAccountDropdown() {
    const selectedCompany = companyDropdown.value;
    accountDropdown.innerHTML = '<option value="">Select Account</option>';
    if (selectedCompany) {
        const accounts = Object.keys(companyData[selectedCompany]);
        accounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account;
            option.text = account;
            accountDropdown.add(option);
        });
    }
}

// Function to display load data for selected account
function displayLoadTable() {
    const selectedCompany = companyDropdown.value;
    const selectedAccount = accountDropdown.value;
    loadTable.innerHTML = '';
    if (selectedCompany && selectedAccount) {
        const accountData = companyData[selectedCompany][selectedAccount];
        balanceAmount.textContent = `₹ ${accountData.balance}`;

        accountData.loads.forEach(load => {
            const row = loadTable.insertRow();
            const dateCell = row.insertCell();
            const creditCell = row.insertCell();
            const balanceCell = row.insertCell();
            const utrCell = row.insertCell();
            const upiCell = row.insertCell();
            dateCell.textContent = load.date;
            creditCell.textContent = `₹ ${load.credit}`;
            creditCell.style.color = "green"
            creditCell.style.textAlign = "end"

            balanceCell.textContent = `₹ ${load.balance}`;
            balanceAmount.style.textAlign = "end"
            utrCell.textContent = load.utr;
            utrCell.style.textAlign = "end"
            upiCell.textContent = load.upi;

        });
    }
}

// Event listeners for dropdown changes
companyDropdown.addEventListener('change', updateAccountDropdown);
accountDropdown.addEventListener('change', displayLoadTable);

// Initial update of account dropdown
updateAccountDropdown();

