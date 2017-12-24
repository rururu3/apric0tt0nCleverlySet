<template>
  <div>
    <b-form-radio-group
      buttons
      id="speedValue1"
      v-model="speedValue"
      :options="speedList"
      size="lg"
      name="speedValue"
      >
    </b-form-radio-group>
    <br />
    <template v-for="(data, $index) in buttonList">
    <b-button
      size="lg"
      variant="primary"
      :key="data.title"
      @click="buttonClick(data)"
    >
      {{ data.title }}
    </b-button>
    <br v-if="$index % 3 == 2" :key="$index" />
  </template>
</div>
</template>

<style>
</style>

<script>
  import Howl from 'howler';
  export default {
    data() {
      return({
        sound: null,
        speedValue: 1.0,
        speedList: [
          { text: '0.5倍速', value: 0.5 },
          { text: '1倍速', value: 1.0 },
          { text: '1.5倍速', value: 1.5 },
        ],
        buttonList: [
          {
            title: "はつげん１",
            sound: "./dist/assets/audio/Game-Break.mp3",
          },
          {
            title: "はつげん２",
            sound: "./dist/assets/audio/Game-Death.mp3",
          },
          {
            title: "はつげん３",
            sound: "./dist/assets/audio/Game-Shot.mp3",
          },
          {
            title: "はつげん４",
            sound: "./dist/assets/audio/Game-Spawn.mp3",
          },
          {
            title: "はつげん５",
            sound: "./dist/assets/audio/GU-StealDaisy.mp3",
          },
          {
            title: "はつげん６",
            sound: "./dist/assets/audio/Humm.mp3",
          },
          {
            title: "はつげん７",
            sound: "./dist/assets/audio/R-Damage.mp3",
          },
          {
            title: "はつげん８",
            sound: "./dist/assets/audio/S-Damage.mp3",
          },
          {
            title: "はつげん９",
            sound: "./dist/assets/audio/Thunder1.mp3",
          },
        ],
      });
    },
    methods: {
      buttonClick: function(data) {
        if(this.sound != null) {
          this.sound.stop();
        }
        this.sound = new Howl.Howl({
          src: [data.sound],
          rate: this.speedValue,
        });
        this.sound.play();
      },
    },
    created: function() {
    },
  }
</script>