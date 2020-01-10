<script>
  import { onMount } from "svelte";

  const rock = 0b100;
  const paper = 0b010;
  const scissors = 0b001;
  const rockWins = 0b101;
  const paperWins = 0b110;
  const scissorsWins = 0b011;

  const choices = [
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
  let playersScore = 0;
  let computersScore = 0;

  function pick(playersPick) {
    const computersPick = choices[Math.floor(Math.random() * choices.length)];
    const outcome = playersPick.value | computersPick.value;
    message = `Player picked ${playersPick.label}, Computer picked ${computersPick.label}`;

    switch (outcome) {
      case rockWins:
        (playersPick.value === rock) && playerWins();
        (computersPick.value === rock) && computerWins();
        break;
      case paperWins:
        (playersPick.value === paper) && playerWins();
        (computersPick.value === paper) && computerWins();
        break;
      case scissorsWins:
        (playersPick.value === scissors) && playerWins();
        (computersPick.value === scissors) && computerWins();
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

  function playerWins() {
    result = "Player wins!";
    playersScore++;
  }

  function computerWins() {
    result = "Computer wins!";
    computersScore++;
  }

  function pickByKey(key) {
    let index = ["1", "2", "3"].indexOf(key);
    if (index !== -1) {
      return pick(choices[index]);
    }

    index = ["r", "p", "s"].indexOf(key);
    if (index !== -1) {
      return pick(choices[index]);
    }
  }

  function handleKeydown(e) {
    const key = e.key;
    pickByKey(key);
  }
</script>

<style>
  h1,
  p {
    text-align: center;
  }

  hr {
    width: 100%;
    border: 1px dashed #e86701;
  }

  button {
    font-size: 1.3em;
    display: inline-block;
    color: #e86701;
    border: 2px solid #e86701;
    background: none;
    margin: 0 0.5em;
    padding: 0.2em 0.5em;
    border-radius: 5px;
  }

  .messages,
  .score,
  .choices {
    margin: 1.2em 0;
    text-align: center;
  }

  .score {
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 300px;
  }

  .score span {
    display: inline-block;
  }

  @media screen and (max-width: 400px) {
    button {
      font-size: 1.4em;
      margin: 0.2em 1em;
    }

    .messages,
    .score,
    .choices {
      margin: 0.5em 0;
    }

    .messages {
      font-size: 0.8em;
    }
  }
</style>

<svelte:window on:keydown={handleKeydown}/>

<h1>Rock, Paper, Scissors</h1>

<p>
  <small>Click a button or press 1, 2, 3 or R, P, S on your keyboard.</small>
</p>

<hr/>

<div class="score">
  <span>Player: {playersScore}</span>
  <span>Computer: {computersScore}</span>
</div>

<div class="choices">
  {#each choices as choice}
    <button on:click={() => pick(choice)}>
      <i class="fa fa-fw fa-{choice.icon}"></i>
      {choice.label}
    </button>
  {/each}
</div>

<div class="messages">
  <p>&nbsp;{message}&nbsp;</p>
  <p>&nbsp;{result}&nbsp;</p>
</div>
