<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!-- https://github.com/michalsnik/aos -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{url_for('static', filename = 'main.css')}}" type="text/css">

    <!-- {% if title %}
        <title>CodeWithPrince-{{title}}</title>
    {% else %}
        <title>CodeWithPrince</title>
    {% endif %} -->

</head>
<!-- <body style = 'background-color: black;'> -->
<body class ="day-night" id = "day-night">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a href="https://ihcantabria.com/">
            <img src="https://ihcantabria.com/wp-content/uploads/2019/02/Logo-IHCantabria-Universidad-Cantabria-whitev2-copia-2.png" width="187" height="76" alt="IHCantabria" id="logo" data-height-percentage="74">
          </a>
        </div>
    </nav>
    

    <div class="container-xxl" style="display: flex;">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xm-12">
                <div class="ml-auto mr-auto">
                  {% block content %}
                  {% endblock %}
                </div>
            </div>
        </div>
    </div>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <!-- MathJax3 -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script>
      AOS.init({
        offset: 400,
        duration: 1000
      });
     
    </script>


  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <!-- Include a common script to handle layout injection -->
  <!-- <script type="text/javascript" src="./js/common-layout.js"></script> -->

</body>
</html>