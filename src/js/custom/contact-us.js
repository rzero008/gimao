$(document).ready(function() {
    // CONTACT US UI SCRIPTS
        $(".submit-complete").addClass("hide");

     var x, i, j, selElmnt, a, b, c;
     /*look for any elements with the class "custom-select":*/
     x = document.getElementsByClassName("custom-select");
     for (i = 0; i < x.length; i++) {
       selElmnt = x[i].getElementsByTagName("select")[0];
       /*for each element, create a new DIV that will act as the selected item:*/
       a = document.createElement("DIV");
       a.setAttribute("class", "select-selected");
       a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
       x[i].appendChild(a);
       /*for each element, create a new DIV that will contain the option list:*/
       b = document.createElement("DIV");
       b.setAttribute("class", "select-items select-hide");
       for (j = 1; j < selElmnt.length; j++) {
         /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
         c = document.createElement("DIV");
         c.innerHTML = selElmnt.options[j].innerHTML;
         c.addEventListener("click", function(e) {
             /*when an item is clicked, update the original select box,
             and the selected item:*/
             var y, i, k, s, h;
             s = this.parentNode.parentNode.getElementsByTagName("select")[0];
             h = this.parentNode.previousSibling;
             for (i = 0; i < s.length; i++) {
               if (s.options[i].innerHTML == this.innerHTML) {
                 s.selectedIndex = i;
                 h.innerHTML = this.innerHTML;
                 y = this.parentNode.getElementsByClassName("same-as-selected");
                 for (k = 0; k < y.length; k++) {
                   y[k].removeAttribute("class");
                 }
                 this.setAttribute("class", "same-as-selected");
                 break;
               }
             }
             h.click();
         });
         b.appendChild(c);
       }
       x[i].appendChild(b);
       a.addEventListener("click", function(e) {
           /*when the select box is clicked, close any other select boxes,
           and open/close the current select box:*/
           e.stopPropagation();
           closeAllSelect(this);
           this.nextSibling.classList.toggle("select-hide");
           this.classList.toggle("select-arrow-active");
       });
     }
     function closeAllSelect(elmnt) {
       /*a function that will close all select boxes in the document,
       except the current select box:*/
       var x, y, i, arrNo = [];
       x = document.getElementsByClassName("select-items");
       y = document.getElementsByClassName("select-selected");
       for (i = 0; i < y.length; i++) {
         if (elmnt == y[i]) {
           arrNo.push(i)
         } else {
           y[i].classList.remove("select-arrow-active");
         }
       }
       for (i = 0; i < x.length; i++) {
         if (arrNo.indexOf(i)) {
           x[i].classList.add("select-hide");
         }
       }
     }
     /*if the user clicks anywhere outside the select box,
     then close all select boxes:*/
     document.addEventListener("click", closeAllSelect);

     /*  Accept numbers only. */
     $("#cell_no").keydown(function (e) {
             // Allow: backspace, delete, tab, escape, enter and .
             if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                  // Allow: Ctrl/cmd+A
                 (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                  // Allow: Ctrl/cmd+C
                 (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
                  // Allow: Ctrl/cmd+X
                 (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
                  // Allow: home, end, left, right
                 (e.keyCode >= 35 && e.keyCode <= 39)) {
                      // let it happen, don't do anything
                      return;
             }
             // Ensure that it is a number and stop the keypress
             if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                 e.preventDefault();
             }
         });

     /* check select field */
     function validateForm() {
          'use strict';
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);
      }

      /* Accept Character Only */
      $("#custName").keydown(function (e) {
        var key = e.keyCode;
        if (key >= 48 && key <= 57) {
            e.preventDefault();
        }
      });

     /* submit the form */
      $("#btn_send").click(function(e){
        validateForm();
        $(".hideCollapse").removeAttr("style");
        $(".submit-complete").removeClass("hide");
        $(".submit-complete").addClass("show");
      });
    
    
    
    
    
    /* contact us page js scripts */
    
    $(".contacts-region").click(function(){
            $(".region-panel-filter").toggle();
            $(this).toggleClass('close-filter');
    
    });
    $(".close-x-button").click(function(){
        $(".region-panel-filter").toggle();
        $(".contacts-region").toggleClass('close-filter');
    });
});
