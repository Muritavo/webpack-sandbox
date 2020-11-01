import {deburr} from 'lodash';

export default function(name) {
    console.warn(`${name} says:`)
    console.warn(deburr(`I'm your old friend ${name}. Can I join the party?`))
}