const { MTProto } = require('telegram-mtproto')

const api = {
  invokeWithLayer: 0xda9b0d0d,
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : 49631,
  app_version    : '1.0.1',
  lang_code      : 'en'
}

const phone = {
  num : '+48575775484',
  code: '22222'
}

const server = { webogram: true, dev: false }

const config = {
  // NOTE: if you FORK the project you MUST use your APP ID.
  // Otherwise YOUR APPLICATION WILL BE BLOCKED BY TELEGRAM
  // You can obtain your own APP ID for your application here: https://my.telegram.org
  id  : 269479,
  hash: 'ba8104f9a519bb1ce9722e027f21b82b'
}

const client = MTProto({ server, api })

async function sendCode(phone){
	test();
  const {phone_code_hash} = await client('auth.sendCode', {
    phone_number  : phone,
	sms_type	  : 5,
    api_id        : config.id,
    api_hash      : config.hash
  })
return {phone_code_hash};

}
async function login(phone_code_hash, code){
	console.log(phone_code_hash);
    const { user } = await client('auth.signIn', {
  	phone_number   : phone.num.toString(),
  	phone_code_hash,
  	phone_code     : code.toString()

    })
	alert('signed as ', user);
}
function test(){
	console.log("test")
}

let Telegram = {
	sendCode: sendCode,
	login: login
}

module.exports = Telegram;
