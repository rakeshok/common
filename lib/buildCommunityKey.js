
export default function buildCommunityKey(communityId, tab) {
	let key = 'community';

	if (communityId)
		key += '-'+communityId;

	if ( tab )
		key += '-'+tab;

	return key;
}
