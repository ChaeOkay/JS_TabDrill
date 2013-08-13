
function Tab(tab, txt){
  this.tab = tab;
  this.txt = txt
};

Tab.prototype = {
  changeContent: function(){
    var that = this;
    $(this.tab).on('click', function(){
      that.changeText();
      that.changeTab();
    });
  },
  changeText: function(){
    $('.tab').hide();
    $(this.txt).show();
  },
  changeTab: function(){
    $('ul li').removeClass('active');
    $(this.tab).parent().addClass('active');
  }
}

$(document).ready(function() {
  var tab1 = new Tab($(".tabs li:first-child a"), '#tab1');
  tab1.changeContent();

  var tab2 = new Tab($(".tabs li:nth-child(2) a"), '#tab2');
  tab2.changeContent();

  var tab3 = new Tab($(".tabs li:nth-child(3) a"), '#tab3');
  tab3.changeContent();
});

