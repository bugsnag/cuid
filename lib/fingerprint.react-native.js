import pad from './pad';

var globalCount = Object.keys(global);
var clientId = pad(globalCount.toString(36), 4);

export default function fingerprint () {
  return clientId;
}
