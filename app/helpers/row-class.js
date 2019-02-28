import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export function rowClass(params/*, hash*/) {
  // return params;
  if(typeOf(params[0])=='string'){
    return params[0].toUpperCase();
  }
  else if(params[0]){
    var row = params[0], class_names = [];
    if(row.Boards === 0 || row.BoardsSum === 0){
      class_names.push("zero");
    }
    return class_names.join(" ");
  }
  return "";
}

export default helper(rowClass);
