<template lang="pug">
	.hello
		h3 dasd add
		ul.artists-list
			Artist(v-for="artist in artists" v-bind:artist="artist" :key="artist.name")
			//- li(v-for="artist in artists") {{ artist.name }}
		
</template>

<script>
import getArtists from '../api/index'
import Artist from './Artist.vue'
export default {
	name: 'HelloWorld',
	components: {
		Artist
	},
	props: {
		msg: String
	},
	data() {
		return {
			artists: []
		}
		
	},
	mounted: function() {
		const self = this
		getArtists()
		.then(function(artists) {
			self.artists = artists
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h3
	margin 40px 0 0
	color red!important

.artists-list
	text-align center
	li
		display inline
		margin 5px 10px
</style>
