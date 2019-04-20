module.exports.StrToHex = (string => Buffer.from(string, 'utf8').toString('hex'));
module.exports.HexToStr = (hex => Buffer.from(hex, 'hex').toString('utf8'));