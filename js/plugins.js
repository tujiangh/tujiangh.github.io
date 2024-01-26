<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>hexo.extend.filter.register('theme_inject', function (injects) {
  .
  .
  .
  // 引入 APlayer
  injects.head.file('aplayer', 'source/_data/APlayer.swig', {aplayer: hexo.theme.config.aplayer});
  .
  .
  .
});