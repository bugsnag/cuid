/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

import fingerprint from './lib/fingerprint.mjs';
import createCuid from './lib/cuid.mjs';

const cuid = createCuid(fingerprint);

export default cuid;
