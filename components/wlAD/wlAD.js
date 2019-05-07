Component({
  properties: {
    adData: Object,
  },
  attached: function () {
    // console.log('attached', this.dataset, this.data);
    this.setData({
      adID: this.dataset.id
    });
  },
  created: function () {
    // console.log('created', this.dataset);
  },
  methods: {
    clickAd(e) {
      if (e.currentTarget.dataset.type === 'insert') {
        this.triggerEvent('close')
      }
      this.triggerEvent('click');
    },
    close() {
      this.triggerEvent('close')
    }
  }
});
