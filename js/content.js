var nfts = [];

window.addEventListener("load", function(){
  const checkTimer = setInterval(makeLink, 1000);

  function makeLink() {
    if($(".grid-card__main").length == nfts.length) return;
    $(".grid-card__main").each(function(i, element){
      var id = $(element).find("h6.grid-card__title").text().match(/[0-9]+$/)[0];
      if(nfts.indexOf(id) == -1){
        nfts.push(id);
        var btn = $('<a href="https://ssc-staking.genesysgo.com/search?edition='+id+'" target="_blank">Search</a>');
        btn.css('color', '#75FAC0');
        btn.css('margin-left', '0.5em');
        $(element).find('.card__price').append(btn);
      }
    });
  }
});
