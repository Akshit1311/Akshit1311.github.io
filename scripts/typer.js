const whoamiText = `
<div class="new-shell">
Akshit Gupta | Web Developer | Budding Ethical Hacker<br /><br />
<span class="text-red">root@a4748g</span
><span class="text-white"
  >:<span class="text-primary">~</span>$</span
>

</div>
`;

let cmd = ["w", "h", "o", "a", "m", "i"];
let recentCmd = "";

count = 0;
type();

function type() {
  $(".result-text").html("");

  if (count < cmd.length) {
    recentCmd += cmd[count];
    $(".cmd").html(recentCmd);
    count++;
    setTimeout(type, 200);
  } else {
    $(".blinker").remove();
    $(".result-text").html("Processing...");

    setTimeout(() => {
      $(".result-text").html(whoamiText);
      $(".new-shell").append(`<span class="blinker">|</span>`);
    }, 1500);

    recentCmd = "";
    count = 0;
    setTimeout(type, 6000);
    return;
  }
}

//   setTimeout(200, type());

// for (i = 0; i < cmd.length; i++) {
//   recentCmd += cmd[i];
//   setTimeout(() => {
//     $(".cmd").html(recentCmd);
//   }, 1000);
// }
