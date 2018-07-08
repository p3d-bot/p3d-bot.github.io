ABIs = {
divies :
[
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "pushers_",
		"outputs": [
			{
				"name": "tracker",
				"type": "uint256"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "pusherTracker_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_percent",
				"type": "uint256"
			}
		],
		"name": "distribute",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rateLimiter_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "pusher",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "startingBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "masternodePayout",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "finalBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "compressedData",
				"type": "uint256"
			}
		],
		"name": "onDistribute",
		"type": "event"
	}
]

// end divies abi
}