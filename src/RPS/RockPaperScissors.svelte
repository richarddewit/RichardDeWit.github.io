<script>
  import { onDestroy } from "svelte";
  import { PlayerName } from "@/stores";

  let playerName = "You";
  let computerName = "Richard";

  const playerNameUnsubscribe = PlayerName.subscribe(value => {
    playerName = value;
  });

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
  let playersPick = null;
  let computersPick = null;

  function pick(choice) {
    playersPick = choice;
    computersPick = choices[Math.floor(Math.random() * choices.length)];
    const outcome = playersPick.value | computersPick.value;
    message = `${playerName} picked ${playersPick.label}, ${computerName} picked ${computersPick.label}`;

    switch (outcome) {
      case rockWins:
        playersPick.value === rock && playerWins();
        computersPick.value === rock && computerWins();
        break;
      case paperWins:
        playersPick.value === paper && playerWins();
        computersPick.value === paper && computerWins();
        break;
      case scissorsWins:
        playersPick.value === scissors && playerWins();
        computersPick.value === scissors && computerWins();
        break;

      case 0b100:
      case 0b010:
      case 0b001:
        result = "Tie! Try again.";
        break;

      default:
        result = "WTF? How?";
        break;
    }
  }

  function playerWins() {
    result = playerName + " win" + (playerName === "You" ? "" : "s") + "!";
    playersScore++;
  }

  function computerWins() {
    result = `${computerName} wins!`;
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

  onDestroy(() => {
    playerNameUnsubscribe();
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<h1>Rock, Paper, Scissors</h1>

<p>
  <small>Click a button or press 1, 2, 3 or R, P, S on your keyboard.</small>
</p>

<hr />

<div class="score">
  <span>
    {playerName}:
    <strong>{playersScore}</strong>
  </span>
  <span>
    {computerName}:
    <strong>{computersScore}</strong>
  </span>
</div>

<div class="choices">
  {#each choices as choice, index}
    <button on:click={() => pick(choice)}>
      <i class="fa fa-fw fa-{choice.icon}" />
      {choice.label}
      <span class="keycode">{index + 1}</span>
    </button>
  {/each}
</div>

<div class="messages">
  <p>
    {#if playersPick}
      {playerName} picked
      <strong>{playersPick.label}</strong>
    {:else}&nbsp;{/if}
  </p>
  <p>
    {#if computersPick}
      {computerName} picked
      <strong>{computersPick.label}</strong>
    {:else}&nbsp;{/if}
  </p>
  <p>
    <big>
      {#if result}{result}{:else}&nbsp;{/if}
    </big>
  </p>
</div>

<style>
  button {
    font-size: 1.1em;
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
    margin-right: 0.5em;
    word-break: break-word;
  }

  .score span:last-child {
    margin-right: 0;
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
