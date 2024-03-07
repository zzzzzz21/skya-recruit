export default class InitYoutube {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.root = element;
    this.videoId = this.root.dataset.youtubeId;
    this.initButton = this.root.querySelector('.js-initYouTube__init');
    this.closeButtons = this.root.querySelectorAll('.js-initYouTube__close, .js-initYouTube__button');
    this.contentElement = this.root.querySelector('.js-initYouTube__content');
    this.player = null;
  }

  // 初期設定
  init() {
    this.bindEvent();
  }

  bindEvent() {
    this.initButton.addEventListener('click', () => this.clickInitButtonHandler());
    this.closeButtons.forEach((button) => {
      button.addEventListener('click', () => this.clickCloseButtonHandler());
      button.addEventListener('touchend', () => this.clickCloseButtonHandler());
    });


  }

  clickInitButtonHandler() {
    this.initPlayer();
  }

  clickCloseButtonHandler(e) {
    this.removePlayer();
  }

  initPlayer() {
    // eslint-disable-next-line no-undef
    this.player = new YT.Player(this.contentElement, {
      height: '360',
      width: '640',
      videoId: this.videoId,
      playerVars: {
        'autoplay': 1, // 自動再生を有効
        'controls': 1, // 動画コントロールを表示
        'rel': 0, // 関連動画非表示
      },
      events: {
        'onReady': (event) => this.onPlayerReady(event)
      }
    });
  }

  onPlayerReady(event) {
    event.target.playVideo(); // 動画の再生を開始
  }

  removePlayer() {
    if(this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
}
