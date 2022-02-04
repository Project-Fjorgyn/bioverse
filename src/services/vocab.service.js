import { pinusSchema, pinusMembers } from './pinus';
import { pinalesSchema, pinalesMembers } from './pinales';
import { pinaceaeSchema, pinaceaeMembers } from './pinaceae';

export function LoadSchema(path) {
  return {
    pinus: pinusSchema,
    pinales: pinalesSchema,
    pinaceae: pinaceaeSchema,
  }[path];
}

export function LoadTaxa(path) {
  return {
    pinus: pinusMembers,
    pinales: pinalesMembers,
    pinaceae: pinaceaeMembers,
  }[path];
}
