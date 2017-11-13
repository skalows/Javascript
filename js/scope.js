var variableGlobal = "esta es Global";

    function mifuncion() {
      var variablelocal = "esta es local";

      function funcionlocal() {
        var variablelocal = "lo local papa";
        alert(variablelocal);
        alert(variableGlobal);
      }
      funcionlocal();
    }
    mifuncion();
