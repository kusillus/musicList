<template lang="pug">
	.hello
		h3 Top Artists For Country
		div.pb-4
			div Select country
			select(v-model="selectedCountry")
				option(disabled selected) Country
				template(v-for="country in countries")
					option(:value="country.value") {{country.name}}
		Spinner(v-show="loading")
		ul.artists-list(v-show="!loading")
			Artist(v-for="artist in artists" v-bind:artist="artist" :key="artist.name")
			//- li(v-for="artist in artists") {{ artist.name }}
		
</template>

<script>
import getArtists from '../api/index'
import Artist from './Artist.vue'
import Spinner from './Spinner.vue'
export default {
	name: 'HelloWorld',
	components: {
		Artist,
		Spinner
	},
	props: {
		msg: String
	},
	data() {
		return {
			countries: [
				{name: 'Peru', value: 'peru'},
				{name: 'España', value: 'spain'},
				{name: 'Argentina', value: 'argentina'},
			],
			selectedCountry: '',
			artists: [],
			loading: false
		}
		
	},
	mounted: function() {
	},
	watch: {
		selectedCountry: function(val){
			let self = this
			self.loading = true
			getArtists(val)
			.then(function(artists) {
				self.artists = artists
				self.loading = false
			})
		}

	},
	methods: {

	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h3
	margin 40px 0 0
	color #7b7b7b

.artists-list
	text-align center
	display flex
	flex-flow row wrap
	justify-content center
.pb-4
	padding-bottom 1rem
</style>
