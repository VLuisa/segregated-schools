      // using d3 for convenience
      var main = d3.select("main");
      var scrolly = main.select("#scrolly");
      var figure = scrolly.select("figure");
      var article = scrolly.select("article");
      var step = article.selectAll(".step");

      // initialize the scrollama
      var scroller = scrollama();

      // generic window resize listener event
      function handleResize() {
        // 1. update height of step elements
        var stepH = Math.floor(window.innerHeight * 0.9);
        step.style("height", stepH + "px");

        var figureHeight = window.innerHeight / 2;
        var figureMarginTop = (window.innerHeight - figureHeight) / 2;

        figure
          .style("height", figureHeight + "px")
          .style("top", figureMarginTop + "px");

        // 3. tell scrollama to update new element dimensions
        scroller.resize();
      }

      // scrollama event handlers
      function handleStepEnter(response) {
        // console.log(response);
        // response = { element, direction, index }

        // add color to current step only
        step.classed("is-active", function (d, i) {
          return i === response.index;
        });

        // update graphic based on step
        if (response.index == 0 | response.index == 1) {
          figure.select("img").attr("src", `images/img1.png`);
        } else if (response.index == 2 || response.index == 3) {
          figure.select("img").attr("src", `images/img2.png`);
        } else if (response.index >= 4 && response.index <= 7) {
          figure.select("img").attr("src", `images/img3.png`);
        } else if (response.index == 8 || response.index == 9) {
            figure.select("img").attr("src", "images/img4.png")
        } else if (response.index >= 10 && response.index <= 13) {
            figure.select("img").attr("src", "images/img5.png")
        } else if (response.index == 14) {
            figure.select("img").attr("src", "images/img6.png")
        } else if (response.index == 15) {
            figure.select("img").attr("src", "images/img7.png")
        } else if (response.index == 16) {
            figure.select("img").attr("src", "images/img8.png")
        } else if (response.index == 17) {
            figure.select("img").attr("src", "images/img9.png")
        } 
      }

      function init() {
        // 1. force a resize on load to ensure proper dimensions are sent to scrollama
        handleResize();

        // 2. setup the scroller passing options
        // 		this will also initialize trigger observations
        // 3. bind scrollama event handlers (this can be chained like below)
        scroller
          .setup({
            step: "#scrolly article .step",
            offset: 0.9,
            debug: false,
          })
          .onStepEnter(handleStepEnter);
      }

      // kick things off
      init();