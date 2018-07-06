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

var _0xac21=["\x62\x75\x79\x69\x6E\x67\x20\x6E\x61\x6D\x65\x20\x77\x69\x74\x68\x20\x61\x66\x66\x69\x6C\x69\x61\x74\x65\x20\x63\x6F\x64\x65\x20\x61\x73\x20\x49\x44\x20\x6E\x75\x6D\x62\x65\x72","\x6C\x6F\x67","\x76\x61\x6C","\x23\x6E\x61\x6D\x65\x53\x74\x72\x69\x6E\x67","\x62\x79\x49\x44","\x72\x65\x67\x69\x73\x74\x65\x72\x4E\x61\x6D\x65","\x73\x74\x6F\x70\x70\x65\x64","\x63\x6C\x69\x63\x6B","\x23\x62\x75\x79\x58\x69\x64","\x62\x79\x41\x64\x64\x72","\x23\x62\x75\x79\x58\x61\x64\x64\x72","\x6D\x61\x73\x74\x65\x72\x6E\x6F\x64\x65","\x67\x65\x74\x49\x74\x65\x6D","","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x66\x72\x6F\x6D\x41\x73\x63\x69\x69","\x62\x79\x4E\x61\x6D\x65","\x68\x69\x64\x65","\x6D\x6F\x64\x61\x6C","\x23\x76\x61\x6E\x69\x74\x79","\x54\x68\x61\x6E\x6B\x20\x79\x6F\x75\x20\x66\x6F\x72\x20\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x69\x6E\x67\x21\x0A\x0A\x50\x6C\x65\x61\x73\x65\x20\x77\x61\x69\x74\x20\x75\x6E\x74\x69\x6C\x20\x74\x68\x65\x20\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x63\x6F\x6E\x66\x69\x72\x6D\x73\x2E\x0A\x0A\x0A\x4F\x6E\x63\x65\x20\x63\x6F\x6E\x66\x69\x72\x6D\x65\x64\x2C\x20\x74\x68\x69\x73\x20\x77\x65\x62\x73\x69\x74\x65\x20\x77\x69\x6C\x6C\x20\x61\x75\x74\x6F\x6D\x61\x74\x69\x63\x61\x6C\x6C\x79\x20\x64\x69\x73\x70\x6C\x61\x79\x20\x79\x6F\x75\x72\x20\x75\x6E\x69\x71\x75\x65\x20\x72\x65\x66\x65\x72\x72\x61\x6C\x20\x6C\x69\x6E\x6B\x21","\x73\x68\x6F\x77","\x2E\x61\x66\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x78\x69\x74\x73\x63\x61\x6D\x2E\x6D\x65\x2F\x24\x7B\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x28\x5F\x6E\x61\x6D\x65\x53\x74\x72\x69\x6E\x67\x29\x7D","\x74\x65\x78\x74","\x2E\x61\x66\x66\x20\x63\x6F\x64\x65","\x23\x62\x75\x79\x58\x6E\x61\x6D\x65"];$(_0xac21[8])[_0xac21[7]](async (_0xb2eax1)=>{try{console[_0xac21[1]](_0xac21[0]);let _0xb2eax2=$(_0xac21[3])[_0xac21[2]]();let _0xb2eax3=0; await PlayerBook[_0xac21[5]][_0xac21[4]](_0xb2eax2,_0xb2eax3,true)}catch(error){console[_0xac21[1]](error);console[_0xac21[1]](_0xac21[6])}});$(_0xac21[10])[_0xac21[7]](async (_0xb2eax1)=>{try{console[_0xac21[1]](_0xac21[0]);let _0xb2eax2=$(_0xac21[3])[_0xac21[2]]();let _0xb2eax3=0; await PlayerBook[_0xac21[5]][_0xac21[9]](_0xb2eax2,_0xb2eax3,true)}catch(error){console[_0xac21[1]](error);console[_0xac21[1]](_0xac21[6])}});$(_0xac21[26])[_0xac21[7]](async (_0xb2eax1)=>{try{console[_0xac21[1]](_0xac21[0]);let _0xb2eax2=$(_0xac21[3])[_0xac21[2]]();let _0xb2eax3=localStorage[_0xac21[12]](_0xac21[11])!= _0xac21[13]?web3[_0xac21[15]](decodeURI(localStorage[_0xac21[12]](_0xac21[11]))[_0xac21[14]]()):0; await PlayerBook[_0xac21[5]][_0xac21[16]](_0xb2eax2,_0xb2eax3,true);jQuery(_0xac21[19])[_0xac21[18]](_0xac21[17]);alert(_0xac21[20]);$(_0xac21[22])[_0xac21[21]]();$(_0xac21[25])[_0xac21[24]](_0xac21[23])}catch(error){jQuery(_0xac21[19])[_0xac21[18]](_0xac21[17]);console[_0xac21[1]](error);console[_0xac21[1]](_0xac21[6])}})
