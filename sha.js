const request = require('request');


const options = {
  method: 'POST',
  url: 'https://exchanger-api.fuspay.finance/api/v1/no-auth/PartnerP2P/SignRequestSha512',
  headers: {'Content-Type': 'application/json'},
  body: {
    partner_order_id: 'FUSPAY-00400-001-091-008',
    amount_to_collect: '3',
    timestamp: 1693285902419,
    order_expiration: 1693285902419,
    currency: 'GHS',
    partner_callback_url: 'https://webhook.site/xxxxxxxx',
    partner_redirect_url: 'https://google.com',
    secret: '4LJDHGA-SJTECNA-XXXX-XXXXsk_partner_ph25sjy-qtfeoxy-rqbvzyq-z-xx'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
