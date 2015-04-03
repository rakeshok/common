
function buildCommunityKey(communityId, tab) {
	var key = 'community';

	if (communityId)
		key += '-'+communityId;

	if ( tab )
		key += '-'+tab;

	return key;
}

module.exports = buildCommunityKey;
