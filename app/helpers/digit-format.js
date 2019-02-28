import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export function digitFormat(params, {point}/*, hash*/) {
  console.log(params[0], point);
  return params[0].toFixed(point);
}

export default helper(digitFormat);
