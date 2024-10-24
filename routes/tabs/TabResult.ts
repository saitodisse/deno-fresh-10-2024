export type TabResult = {
	id: string
	version_obs?: string
	createdAt: string
	updatedAt: string
	owner_id: string
	owner_name: string // informative, computed
	owner_username?: string // informative, computed

	forked_from_tab_id: string

	forked_from_tab_owner_id?: string // informative, computed
	forked_from_tab_owner_name?: string // informative, computed
	forked_from_tab_owner_username?: string // informative, computed

	root_tab_id?: string // informative, computed
	root_tab_owner_id?: string // informative, computed
	root_tab_owner_name?: string // informative, computed
	root_tab_owner_username?: string // informative, computed

	// artist, release, track
	artist_slug: string
	artist_name: string
	release_slug: string
	release_name: string
	track_slug: string
	track_name: string

	body: string

	// configs
	font_size: number
	transpose: number
	fingerprint: string
	view_mode: string

	url: string

	score_five_stars?: number // computed
	visited_count?: number // computed

	// user preferences
	localConfigs?: {
		fontSize: number
		transposeNumber: number
		viewMode: string | null
		lineHeight: number
		chordHeight: number
		blockMarginRight: number
		background_color: string
		liric_color: string
		chord_color: string
	}
}
