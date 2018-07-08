// provider setup
let provider = false;

 
var _0x18ee=["\x30\x78\x44\x36\x30\x64\x33\x35\x33\x36\x31\x30\x44\x39\x61\x35\x43\x61\x34\x37\x38\x37\x36\x39\x44\x33\x37\x31\x62\x35\x33\x43\x45\x66\x41\x41\x37\x42\x36\x45\x34\x63","\x50\x6C\x61\x79\x65\x72\x42\x6F\x6F\x6B","\x72\x65\x67\x69\x73\x74\x65\x72\x4E\x61\x6D\x65\x58\x6E\x61\x6D\x65","\x63\x6F\x6E\x74\x72\x61\x63\x74"];let PlayerBook={address:_0x18ee[0],ABI:ABIs[_0x18ee[1]],contract:null,registerName:{byName:async (_0x2b9dx2,_0x2b9dx3,_0x2b9dx4)=>{return  new Promise((_0x2b9dx5,_0x2b9dx6)=>{PlayerBook[_0x18ee[3]][_0x18ee[2]](_0x2b9dx2,_0x2b9dx3,_0x2b9dx4,{value:10000000000000000},(_0x2b9dx7,_0x2b9dx8)=>{if(!_0x2b9dx7){_0x2b9dx5(_0x2b9dx8)}else {_0x2b9dx6(_0x2b9dx7)}})})}}}

// ************* connection functions *************
const ConnectTo = {
	metamask: async fn => {
		if (typeof web3 !== 'undefined') {
			// use the current connected provider from metamask
			return Promise.resolve(new Web3(web3.currentProvider))
		} else {
			console.log('metamask not detected')
			console.log('please visit <a href="https://metamask.io">metamask.io</a> to install browser extension')
			// no web3 provider, halt promise
			return Promise.reject()
		}
	},

	account: async fn => {return new Promise((resolve, reject) => {
		provider.eth.getAccounts((error, accounts) => {
			if (!error) {
				if (accounts[0] !== undefined) {
					provider.eth.defaultAccount = accounts[0]
					resolve()
				} else {
					console.log('no account detected')
					console.log('please log into metamask')
					reject()
				}
			} else {
				reject('Unexpected Error: ' + error)
			}
		})
	})}, 
	
	PlayerBook: async fn => {return new Promise((resolve, reject) => {
		console.log('-loading PlayerBook contract abi from address...')
		PlayerBook.contract = provider.eth.contract(PlayerBook.ABI).at(PlayerBook.address)
	})}
};

// ************* connection script *************
async function connect() {return new Promise((resolve, reject) => {
	async function run() {
		try {
			// connect to metamask
			console.log('connecting to metamask...')
			provider = await ConnectTo.metamask()
			console.log('...success')
			
			// check to see if metamask is logged in & grab account
			console.log('checking login status...')
			await ConnectTo.account()
			console.log('...success')
			console.log('...connected to: ' + provider.eth.defaultAccount)
			
			// connect to playerbook
			console.log('connecting to PlayerBook contract...')
			await ConnectTo.PlayerBook()
			console.log('...success')
			console.log('...PlayerBook contract at: ' + PlayerBook.address)
			
			//finished
			resolve()
		}
		
		catch (error) {
			reject(error)
		}
	}
	
	run()
})};

// ************* on page load *************
jQuery(async fn => {
	try {
		// run main script
		await connect()
	}	
		
	catch (error) {
		console.log(error)
		console.log('stopped')
	}
})


// on submit
$('#buyXid').click(async fn => {
	try {
		console.log('buying name with affiliate code as ID number')
		
		let _nameString = $('#nameString').val()
		let _affCode = 0 //<<<<justo tie this to your browser input affCode
		
		await PlayerBook.registerName.byID(_nameString, _affCode, true)
		
	}
	
	catch (error) {
		console.log(error)
		console.log('stopped')
	}
})

$('#buyXaddr').click(async fn => {
	try {
		console.log('buying name with affiliate code as ID number')
		
		let _nameString = $('#nameString').val()
		let _affCode = 0 //<<<<justo tie this to your browser input affCode
		
		await PlayerBook.registerName.byAddr(_nameString, _affCode, true)
		
	}
	
	catch (error) {
		console.log(error)
		console.log('stopped')
	}
})

$('#buyXname').click(async fn => {
	try {
		console.log('buying name with affiliate code as ID number')
		
		let _nameString = $('#nameString').val()
		let _affCode = localStorage.getItem("masternode") != "" ? web3.fromAscii(decodeURI(localStorage.getItem("masternode")).toLowerCase()) : 0
		
		await PlayerBook.registerName.byName(_nameString, _affCode, true)

		jQuery('#vanity').modal('hide')
		alert("Thank you for participating!\n\nPlease wait until the transaction confirms.\n\n\nOnce confirmed, this website will automatically display your unique referral link!")

		$('.aff').show()
		$('.aff code').text(`https://exitscam.me/${encodeURI(_nameString)}`)
		
	}
	
	catch (error) {
		jQuery('#vanity').modal('hide')
		console.log(error)
		console.log('stopped')
	}
})