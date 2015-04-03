import { findWhere } from 'lodash';

export default function pushUnique(container, item) {
	if ( findWhere(container, item) ) return;
	container.push(item);
}