'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on ltc-payment-protocol Module: {0}'
};

module.exports = require('@owstack/ltc-lib').errors.extend(spec);
