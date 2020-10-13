$(function(){
    "use strict";
    $(".toggle-sidebar").on("click",function(){
        $(".content-area, .sidebar").toggleClass("no-sidebar");
    });

    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });


    
      $("#datetimepicker1").datetimepicker({
          format: 'DD-MM-YYYY'
      });

      $("#hide1,#hide2,#hide3").click(function(){
        $(".reasonCourse").hide();
      });
      $("#show1").click(function(){
        $(".reasonCourse").show();
      });

      $("#hide21").click(function(){
        $(".reasonProgramTime").hide();
      });
      $("#show21").click(function(){
        $(".reasonProgramTime").show();
      });

      $("#hide31,#hide32").click(function(){
        $(".reasonNeed").hide();
      });
      $("#show31").click(function(){
        $(".reasonNeed").show();
      });

      $("#hide41").click(function(){
        $(".reasonStart").hide();
      });
      $("#show41").click(function(){
        $(".reasonStart").show();
      });

      $("#hide51").click(function(){
        $(".reasonSession").hide();
      });
      $("#show51").click(function(){
        $(".reasonSession").show();
      });

      $("#hide61").click(function(){
        $(".reasonProgramStudents").hide();
      });
      $("#show61").click(function(){
        $(".reasonProgramStudents").show();
      });

      $("#hide71").click(function(){
        $(".reasoninteraction").hide();
      });
      $("#show71").click(function(){
        $(".reasoninteraction").show();
      });

      $("#hide81").click(function(){
        $(".reasonPerformance").hide();
      });
      $("#show81").click(function(){
        $(".reasonPerformance").show();
      });

      $("#hide91").click(function(){
        $(".reasonSort").hide();
      });
      $("#show91").click(function(){
        $(".reasonSort").show();
      });

      $("#hide101").click(function(){
        $(".reasonEnvironment").hide();
      });
      $("#show101").click(function(){
        $(".reasonEnvironment").show();
      });

      $("#hide111").click(function(){
        $(".reasonBreak").hide();
      });
      $("#show111").click(function(){
        $(".reasonBreak").show();
      });

      $("#hide121").click(function(){
        $(".reasonSupervisor").hide();
      });
      $("#show121").click(function(){
        $(".reasonSupervisor").show();
      });


      $("#hide151").click(function(){
        $(".reasonGeneral").hide();
      });
      $("#show151").click(function(){
        $(".reasonGeneral").show();
      });

      $("#hide161").click(function(){
        $(".reasonRepeat").hide();
      });
      $("#show161").click(function(){
        $(".reasonRepeat").show();
      });

      $("#hide171").click(function(){
        $(".reasonRepeatProgram").hide();
      });
      $("#show171").click(function(){
        $(".reasonRepeatProgram").show();
      });

      $("#hide181").click(function(){
        $(".reasonRepeatSchool").hide();
      });
      $("#show181").click(function(){
        $(".reasonRepeatSchool").show();
      });
      
/*
      var series = [
        {name: 'outside', kindcourse: 'جماعية'},
        {name: 'inside', kindcourse: 'حضورية'},
        {name: 'inside', kindcourse: 'افتراضية'}
        ]
        
        $(".place").change(function(){
          var company = $(this).val();
          var options =  '<option value=""><strong>نوع الدورة التدريبية</strong></option>';
          $(series).each(function(index, value){
            if(value.name == company){
              options += '<option value="'+value.kindcourse+'">'+value.kindcourse+'</option>';
            }
          });
          
          $('.kindcourse').html(options);
        });
    */    
});







