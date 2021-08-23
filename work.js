// $("button").on("click",function() {
//   $("button").after("<button>hlw</button>");
//   $("button").before("<button>hlw</button>")
//   $("h1").prepend("<button>hlw</button>");
//   $("h1").append("<button>hlw</button>");
//   $("button").hide();
//   $("button").show();
// });


$("button").on("click",function() {
  $("button").after("<button>😃</button>").css("font-size","55px");
  $("button").before("<button>😃</button>").css("font-size","55px");
  $("button").hide().css("font-size","55px");

  $("button").show().css("font-size","55px");
});