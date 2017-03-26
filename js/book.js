$(document).ready(function () {

    $('#datepicker')
      .datetimepicker({
        format: "MM/DD/YYYY"
      })
      .on('changeDate', function(ev){
        var bday = ev.date.valueOf();
        var today = moment();
        var age = 17;

        if(age < 18)
          $("#travelCompanion").show();
        else
          $("#travelCompanion").hide();
      });
    //   .on('changeDate', function(toggleFields){
    //     var bday = $('#datepicker').find("active").data("day");
    //     var today = moment();
    //     var age = 17;

    //     console.log(bday);
    //     console.log(today);
    //     console.log(age);

    //     if (age < 18)
    //         $("#travelCompanion").show();
    //     else
    //         $("#travelCompanion").hide();
    // });
});
