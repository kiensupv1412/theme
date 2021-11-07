- Sửa lại đoạn code sau: $wrapper.height($wrapper.width() \* 1.6);
- Fix with cho 2 table: style="width: 900px;"

- Phần code script thêm vào
  `
     <script type="text/javascript">
      function scaleTable() {
        var $el = $("#scaleable-container");
        var elWidth = $el.outerWidth();
        var $wrapper = $("#data-content");
        function doResize(event, component) {
          var scale, origin;
          scale = component.size.width / elWidth;
          $el.css({
            transform: "scale(" + scale + ")" + "translateX(-50%) ",
          });
        }
  
        const starterData = {
          size: {
            width: $wrapper.width(),
            height: $wrapper.height(),
          },
        };
        doResize(null, starterData);
        **$wrapper.height($wrapper.width() * 1.6);**
      }
      $(document).ready(scaleTable);
      $(window).on("resize", scaleTable);
    </script>

  `

- Sửa lại style css cho table
` <div align="center" id="data-content" style="position: relative">
<div
                id="scaleable-container"
                class="flex"
                style="
                  position: absolute;
                  flex-direction: column;
                  top: 0px;
                  left: 50%;
                  transform-origin: 0% 0px;
                  margin-bottom: 5px;
                  background-color: #fff;
                "
            >
  <table class="table table-condensed table-bordered" style="width: 900px;">...</table>
  <table class="table table-condensed table-bordered" style="width: 900px;">...</table>
</div>
`
- Thêm css sau:
  `<style> @media only screen and (min-width: 992px) { #scaleable-container { width: 900px; position: absolute; transform: scale(1) translateX(-50%) !important; transform-origin: 0% 0px; top: 0px; left: 50%; } } </style> `
