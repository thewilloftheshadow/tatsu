import { RequestOptions } from 'http';

declare function Tatsu(apiKey: string, options?: Tatsu.Options): Tatsu.TatsuClient;

declare namespace Tatsu {

	interface Options {
		bucket: BucketOptions
		api: RequestOptions
	}

	interface MemberRanking {
		guild_id: string
		rank: number
		score: number
		user_id: string
	}

	interface UserProfile {
		avatar_url: string
		credits: number
		discriminator: string
		id: string
		info_box: string
		reputation: number
		title: string
		tokens: number
		username: string
		xp: number
	}

	interface BucketOptions {
		limit: number
		interval: number
		networkLatency: number
	}

	export class TatsuClient {
		constructor(apiKey: string, options?: Options)
		private apiKey: string
		private options: {
			bucket: BucketOptions
		}
		getMemberRanking(guild_id: string, user_id: string): Promise<MemberRanking>
		getGuildRankings(guild_id: string, offset?: number): Promise<MemberRanking[]>
		getProfile(user_id: string): Promise<UserProfile>

	}

	export class Bucket {
		limit: number
		interval: number
		networkLatency: number

		constructor(limit: number, interval: number, networkLatency: number)
	}


}

export = Tatsu;