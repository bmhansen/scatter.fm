let LegendView = Backbone.View.extend({
  el: "#legend_wrap",
  render() {
    this.$("li").remove();
    let artistColors = legendModel.get("artistColors");
    for (let artist in artistColors) {
      let color = artistColors[artist];
      if (color.color !== "gray") {
        $("<li>")
          .text(`${artist} (${color.count})`)
          .css("color", color.color)
          .appendTo("#legend");
      }
    }
    $("<li>")
      .text("[Other Artists]")
      .css("color", "gray")
      .appendTo("#legend");
    return this.$el.show();
  },
  remove() {
    return this.$el.hide();
  }
});
  
let legendView = new LegendView;

legendModel.on("change:artistColors", (model, artistColors) => legendView.render());
