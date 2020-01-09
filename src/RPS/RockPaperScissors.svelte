<script>
  const rock = 0b100;
  const paper = 0b010;
  const scissors = 0b001;
  let choices = [
    {
      label: "Rock",
      value: rock,
      icon: "hand-rock-o",
    },
    {
      label: "Paper",
      value: paper,
      icon: "hand-paper-o",
    },
    {
      label: "Scissors",
      value: scissors,
      icon: "hand-scissors-o",
    },
  ];
  let message = "";
  let result = "";

  function pick(playersPick) {
    let opponentsPick = choices[Math.floor(Math.random() * choices.length)];
    message = `Player picked ${playersPick.label}, Computer picked ${opponentsPick.label}`;

    console.log(playersPick.value.toString(2), opponentsPick.value.toString(2), (playersPick.value | opponentsPick.value).toString(2), playersPick.value | opponentsPick.value);
    switch (playersPick.value | opponentsPick.value) {
      case 0b011:
      case 0b101:
      case 0b110:
        result = "We have a winner!"
        break;

      case 0b100:
      case 0b010:
      case 0b001:
        result = "Tie! Try again."
        break;

      default:
        result = "WTF? How?";
        break;
    }
  }
</script>

<style>
  button {
    font-size: 1.8em;
    display: inline-block;
  }

</style>

<div>
  {#each choices as choice}
    <button on:click={() => pick(choice)}>
      <i class="fa fa-fw fa-{choice.icon}"></i>
      {choice.label}
    </button>
  {/each}
</div>

<p>&nbsp;{message}&nbsp;</p>
<p>&nbsp;{result}&nbsp;</p>
