import _ from 'lodash';

export default function compactObject(object) {
	let clone = _.clone(object);
	_.each(clone, function(value, key) {
		if (!value)
			delete clone[key];
	});
	return clone;
}