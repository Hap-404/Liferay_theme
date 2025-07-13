/**
 * © 2017 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: MIT
 */

'use strict';

// ✅ This must come FIRST — before requiring anything else
process.env.DISABLE_R2 = 'true';

var gulp = require('gulp');	
var liferayThemeTasks = require('liferay-theme-tasks');

liferayThemeTasks.registerTasks({
	gulp,
});
