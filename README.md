Ltc Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/ltc-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/ltc-payment-protocol)
[![Build Status](https://img.shields.io/travis/owstack/ltc-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/ltc-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/owstack/ltc-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/owstack/ltc-payment-protocol)

A module for [ltc](https://github.com/owstack/ltc) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install @owstack/ltc-lib
npm install @owstack/ltc-payment-protocol
```

```sh
bower install ltc-lib
bower install ltc-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://ltc.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('@owstack/ltc-payment-protocol');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/ltc-lib/blob/master/CONTRIBUTING.md) on the main ltc-lib repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/ltc-lib/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
