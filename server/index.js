const base_page = `
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Code</title>
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script>
  <script src="https://cdn.bootcss.com/marked/0.3.19/marked.min.js"></script>
  <style>
    hr,pre code,pre tt{padding:0;border:0}body,dl{padding:0}a{color:#1e6bb8;text-decoration:none}a:hover{text-decoration:underline}:first-child,blockquote>:first-child,ol,ul{margin-top:0}img{max-width:100%}pre p{margin:0}pre ol,pre ul{margin:0;padding-top:12px;padding-bottom:12px}pre code,pre tt{display:inline;max-width:initial;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent}pre code:after,pre code:before,pre tt:after,pre tt:before{content:normal}blockquote{padding:0 1rem;margin-left:0;color:#819198;border-left:.3rem solid #dce6f0}blockquote>:last-child{margin-bottom:0}table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}table th{font-weight:700}table td,table th{padding:.5rem 1rem;border:1px solid #e9ebec}dl dt{padding:0;margin-top:1rem;font-size:1rem;font-weight:700}dl dd{padding:0;margin-bottom:1rem}hr{height:2px;margin:1rem 0;background-color:#eff0f1}.header .sp-replacer,.header .sp-replacer.sp-active,.header .sp-replacer:hover,.sp-container .sp-palette-container,.sp-container.sp-light{border-color:#384452}.header .sp-replacer{margin-left:16px;padding:8px;border-radius:3px}.header .sp-palette-container{background:#eef1f5}.header .sp-preview{width:40px}.sp-palette{max-width:300px}.sp-cancel{font-size:14px}.sp-container.sp-light button{background-color:#384452;border:.1rem solid #384452;border-radius:.4rem;color:#fff;cursor:pointer;display:inline-block;font-size:1.1rem;font-weight:700;height:3.8rem;letter-spacing:.1rem;line-height:3.8rem;padding:0 3rem;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap;background-image:none;text-shadow:none}.sp-container.sp-light button:hover{background-color:#1abc9c;border-color:#1abc9c;color:#fff;outline:0;background-image:none}header,textarea{background-color:#fff}.octocat{border:0;color:#f4f5f6;fill:#5e6772;height:5.2rem;position:fixed;right:0;top:0;width:5.2rem;z-index:1}.octocat:hover .octocat-arm{animation:b .56s infinite;transform-origin:13rem 10.6rem}.octocat .octocat-arm,.octocat .octocat-body{fill:#f4f5f6}@keyframes b{0%,50%{transform:rotate(0)}25%,75%{transform:rotate(-25deg)}}.cf:after,.cf:before{content:" ";display:table}.cf:after{clear:both}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{background-color:#eee;margin:0 auto;font-size:14px;font-family:sans-serif;line-height:1.4;color:#333}header{padding:1em;overflow:hidden}footer{text-align:center;color:#666;text-shadow:0 1px 0 #ddd}.col{padding:0 10px}textarea{width:100%;height:600px;margin:0;padding:.5em;overflow:auto;border:none;font-family:courier,monospace;font-size:inherit;color:inherit}#input{background:#333;color:#fff}#output{background:#fff;height:100%;min-height:100%;padding:1em}#input,#output{border-radius:3px}.toolbar{padding-top:5px;padding-bottom:5px;background-color:#e6e6e6}.hljs{font-size:10px}code.code-in-text.prettyprint{padding:2px 7px;border-radius:2px}code.code-in-text span{color:#179ED6}@media (min-width:768px){body{font-size:16px}.col{float:left;width:50%}.row{padding-right:15px;padding-left:15px}}.header{height:80px;line-height:80px}.header button{border-radius:3px;margin-top:15px;line-height:30px;color:#fff}.header h3{padding:0;line-height:80px;text-align:center}textarea#input{height:100%}.button,button,input[type=button],input[type=reset],input[type=submit]{background-color:#384452;border:.1rem solid #384452;border-radius:.4rem;color:#fff;cursor:pointer;display:inline-block;font-size:1.1rem;font-weight:700;height:3.8rem;letter-spacing:.1rem;line-height:3.8rem;padding:0 3rem;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}.button:focus,.button:hover,button:focus,button:hover,input[type=button]:focus,input[type=button]:hover,input[type=reset]:focus,input[type=reset]:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#1abc9c;border-color:#1abc9c;color:#fff;outline:0}.button[disabled],button[disabled],input[type=button][disabled],input[type=reset][disabled],input[type=submit][disabled]{cursor:default;opacity:.5}.button[disabled]:focus,.button[disabled]:hover,button[disabled]:focus,button[disabled]:hover,input[type=button][disabled]:focus,input[type=button][disabled]:hover,input[type=reset][disabled]:focus,input[type=reset][disabled]:hover,input[type=submit][disabled]:focus,input[type=submit][disabled]:hover{background-color:#384452;border-color:#384452}.hljs{display:block;background:#fff;padding:.5em;color:#333;overflow-x:auto}.hljs-comment,.hljs-meta{color:#969896}.hljs-emphasis,.hljs-quote,.hljs-string,.hljs-strong,.hljs-template-variable,.hljs-variable{color:#df5000}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#a71d5d}.hljs-attribute,.hljs-bullet,.hljs-literal,.hljs-symbol{color:#0086b3}.hljs-name,.hljs-section{color:#63a35c}.hljs-tag{color:#333}.hljs-attr,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-title{color:#795da3}.hljs-addition{color:#55a532;background-color:#eaffea}.hljs-deletion{color:#bd2c00;background-color:#ffecec}.hljs-link{text-decoration:underline}</style>
  <script>
    $('document').ready(function () {
      marked.setOptions({
        highlight: function(code, lang) {
          if (typeof lang === 'undefined') {
            return hljs.highlightAuto(code).value;
          } else if (lang === 'nohighlight') {
            return code;
          } else {
            return hljs.highlight(lang, code).value;
          }
        }
      });

      $(window).keydown(function (e){
        if ((e.metaKey || e.ctrlKey) && e.keyCode === 83) { /*ctrl+s or command+s*/
          e.preventDefault();
          return false;
        }
      });

      function updateOutput() {
        try {
          $('#output').html(marked('\`\`\`\\n' + $('textarea#input').val() + '\\n\`\`\`'))
        } catch(error) {
          alert(error)
        }
      }

      $('#input').on('input keydown', updateOutput);

      updateOutput();

      var autosave = localStorage.getItem('md.content');

      var $textarea = $("textarea#input");
      if (autosave && autosave !== 'undefined') {
        var text = JSON.parse(autosave);
        $textarea.val(text);
        updateOutput();
      }

      $textarea.change(function () {
        var file = $textarea.val();
        localStorage.setItem('md.content', JSON.stringify(file));
      });
    });
  </script>
</head>
<body>
<nav class="navigation">
  <a href="https://github.com/phodal/mifa" title="Mifa on Github" target="_blank">
    <svg class="octocat" viewBox="0 0 250 250">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path class="octocat-arm"
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"></path>
      <path class="octocat-body"
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path>
    </svg>
  </a>
</nav>
<div class="row cf">
  <div class="col">
    <div class="header">
      <h3><a href="https://github.com/phodal/code">Code</a> @phodal with <a href="https://github.com/phodal/mifa">Mifa
        Design</a></h3>
    </div>
    <textarea id="input" cols="100" rows="10">
(function() {
  var input, output;
  var converter = new showdown.Converter();

  function updateOutput() {
      output.innerHTML = converter.makeHtml(input.value);
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    input = document.getElementById('input');
    output = document.getElementById('output');

    input.addEventListener('input', updateOutput, false);
    input.addEventListener('keydown', updateOutput, false);

    updateOutput();
  });
})();</textarea>
  </div>

  <div class="col">
    <div class="header">
      <button class="btn button">创建</button>
    </div>
    <div id="output"></div>
  </div>
</div>
</body>
</html>
`;

module.exports.handler = (event, context, callback) => {
  callback(
    null,
    {
      statusCode: 200,
      body: base_page,
      headers: {'Content-Type': 'text/html'},
    }
  );
}
