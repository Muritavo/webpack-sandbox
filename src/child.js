import {deburr} from 'lodash';

export default function(name, whatToSay) {
    console.warn(`${name} says:`)
    console.warn(deburr(whatToSay))
}