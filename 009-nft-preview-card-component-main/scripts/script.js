let banner = document.querySelector('.banner').addEventListener('click', function() {
      let img = this.querySelector('img');
      console.log(img.src);
      window.open(img.src, '_blank');
});