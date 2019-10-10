import { mapGetters, mapMutations, mapActions } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['selectPlaySong']),
    saveSearch (song) {
      this.selectPlaySong(song)
    }
  }
}

export const playerMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters(['currentINdex'])
  },
  methods: {
    ...mapActions(['selectPlaySong']),
    saveSearch (song) {
      this.selectPlaySong(song)
    }
  }
}