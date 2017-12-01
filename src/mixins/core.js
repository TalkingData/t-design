export default {
  created() {
    this.initLocale();
  },
  methods: {
    initLocale() {
      if (this.$i18n) {
        this.mergeLocale();
      } else {
        this.$t = (path) => {
          const lang = navigator.language;
          const keys = path.split('.');
          const key = keys.pop();
          const Locales = this.getLocale();
          let msg = Locales[lang];
          if (!msg) {
            // eslint-disable-next-line
            console.warn && console.warn(`为定义语言文件 ${lang}`);
            return '';
          }
          keys.forEach((k) => {
            msg = msg[k];
          });
          return msg[key];
        };
      }
    },
    mergeLocale() {
      const Locales = this.getLocale();
      Object.keys(Locales).forEach((l) => {
        this.$i18n.mergeLocaleMessage(l, Locales[l]);
      });
    },
    // 覆盖全局语言文件
    getLocale() {},
  },
};
