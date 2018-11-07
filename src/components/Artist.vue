<template lang="pug">
    li.card-music
        img(:src="artist.image[2]['#text']")
        span {{ artist.name }}
</template>

<script>
export default {
    props: ['artist']
}
</script>
<style lang="stylus" scoped>
.card-music
    display flex
    flex-direction column
    align-items center
    justify-content center
    border solid 1px #ececec
    margin 1px 2px
</style>