var ABI = [{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXname","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDropTracker_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"round_","outputs":[{"name":"plyr","type":"uint256"},{"name":"team","type":"uint256"},{"name":"end","type":"uint256"},{"name":"ended","type":"bool"},{"name":"strt","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"eth","type":"uint256"},{"name":"pot","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"},{"name":"icoGen","type":"uint256"},{"name":"icoAvg","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fees_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_laff","type":"uint256"}],"name":"receivePlayerInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"rndTmEth_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerVaults","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentRoundInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXaddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"}],"name":"buyXid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"receivePlayerNameList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"}],"name":"buyXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrRnds_","outputs":[{"name":"eth","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"}],"name":"buyXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_otherF3D","type":"address"}],"name":"setOtherFomo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"potSplit_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"calcKeysReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_keys","type":"uint256"}],"name":"iWantXKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activated_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDropPot_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"win","type":"uint256"},{"name":"gen","type":"uint256"},{"name":"aff","type":"uint256"},{"name":"lrnd","type":"uint256"},{"name":"laff","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"potSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerInfoByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"keysBought","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"},{"indexed":false,"name":"potAmount","type":"uint256"},{"indexed":false,"name":"airDropPot","type":"uint256"}],"name":"onEndTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onWithdrawAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onBuyAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onReLoadAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":true,"name":"roundID","type":"uint256"},{"indexed":true,"name":"buyerID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onAffiliatePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roundID","type":"uint256"},{"indexed":false,"name":"amountAddedToPot","type":"uint256"}],"name":"onPotSwapDeposit","type":"event"}] 

 
window.parseDifference = function(start, end){ 
      // calc diff 
        diff = ((( start - (Math.floor(end.getTime()) / 1000)))| 0); 
 
        // extract time units 
        minutes = ((diff / 60) % 60 ) | 0; 
        seconds = (diff % 60) | 0; 
        hours = (diff / 3600) | 0;  
 
        // prettify with a leading zero if less then ten per unit 
        minutes = minutes < 10 ? "0" + minutes : minutes; 
        seconds = seconds < 10 ? "0" + seconds : seconds; 
        hours = hours < 10 ? "0" + hours : hours; 
 
        return { 
          hours: hours, 
          minutes: minutes, 
          seconds: seconds, 
          diff 
        } 
} 
 
class Countdown { 
  constructor(endsAt, cb){ 
    this.endsAt = endsAt 
    this.cb = cb 
    this.destroyed = false 
    this.Iterator(false) 
  } 
 
  Iterator(kill) { 
    var $this = this 
    let difference = parseDifference($this.endsAt, new Date()) 
    $this.cb(difference, difference.diff < 0) 
    if(!kill && !$this.destroyed) setTimeout(() => { 
      $this.Iterator(difference.diff < 0) 
    }, 1000) 
  } 
 
  Destroy() { 
    this.destroyed = true 
  } 
} 
 
window.Countdown = Countdown 
window.Clock = false 
 
if(!web3){ 
  window.location.href = "bsod.htm" 
} 
 
var price = 0; 
var dapp = web3.eth.contract(ABI).at( '\x30\x78\x41\x36\x32\x31\x34\x32\x38\x38\x38\x41\x42\x61\x38\x33\x37\x30\x37\x34\x32\x62\x45\x38\x32\x33\x63\x31\x37\x38\x32\x44\x31\x37\x41\x30\x33\x38\x39\x44\x61\x31') 
 
var a = ['\x62\x75\x79\x58\x69\x64'];
var b = function (c, d) {
    c = c - 0x0;
    var e = a[c];
    return e;
};
jQuery('\x2e\x62\x75\x79\x4c\x6f\x6e\x67')['\x6f\x6e']('\x63\x6c\x69\x63\x6b', function () {
    dapp[b('0x0')](0x0, 0x0, { 'value': price }, function (c, d) {
        console['\x6c\x6f\x67'](c, d);
    });
});
 
async function loop(){ 
   
  let round = await (new Promise((res, rej) => { 
    dapp.getCurrentRoundInfo((a,  b) => res(b)) 
  })) 
 
  price  = await (new Promise((res, rej) => { 
    dapp.getBuyPrice((a,  b) => res(b)) 
  })) 
 
  if(round[7].toUpperCase() == web3.eth.defaultAccount.toUpperCase()){ 
    jQuery(".scammer").text("You are") 
  } else { 
    jQuery(".scammer").text("Someone else is") 
  } 
 
  jQuery(".pot").text(round[5].div(1e18).toFixed(4)) 
  jQuery(".cost").text(price.div(1e18).toFixed(4)) 
 
  if(Clock) Clock.Destroy() 
  Clock = new Countdown(round[3].toFixed(), (data, expired) => { 
    if(!expired) { 
      jQuery(".timer").text(`${(data.hours == "00" ? "" : data.hours + ":") }${data.minutes}:${data.seconds}`) 
    } else { 
      jQuery(".timer").text(`Round has ended. Awaiting new round.`) 
 
    } 
  }) 
 
   
 
  console.log(dapp) 
} 
 
setInterval(loop, 5000) 
 
loop()