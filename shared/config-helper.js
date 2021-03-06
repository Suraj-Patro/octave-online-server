/*
 * Copyright © 2018, Octave Online LLC
 *
 * This file is part of Octave Online Server.
 *
 * Octave Online Server is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Octave Online Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Octave Online Server.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

"use strict";

const config = require("./config");

module.exports = {
	tier: function(tier) {
		return Object.assign(
			{
				"sessionManager.poolSize": config.sessionManager.poolSize,
				"sessionManager.poolTier": config.sessionManager.poolTier,
				"sessionManager.queueBoostTime": config.sessionManager.queueBoostTime,
				"selinux.cgroup.name": config.selinux.cgroup.name,
				"selinux.prlimit.addressSpace": config.selinux.prlimit.addressSpace,
				"session.legalTime.user": config.session.legalTime.user,
				"session.payloadLimit.user": config.session.payloadLimit.user,
				"session.countdownExtraTime": config.session.countdownExtraTime,
				"session.countdownRequestTime": config.session.countdownRequestTime,
				"session.timewarnTime": config.session.timewarnTime,
				"session.timeoutTime": config.session.timeoutTime,
			},
			config.tiers[tier]
		);
	},
	flavor: function(flavor) {
		if (!config.flavors[flavor]) {
			return null;
		}
		return Object.assign(
			{},
			config.flavorCommon,
			config.flavors[flavor]
		);
	}
};
