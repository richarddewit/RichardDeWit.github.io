<script>
  import Footer from "@/Footer.svelte";
  import RockPaperScissors from "@/RPS/RockPaperScissors.svelte";

  import { PlayerName } from "@/stores";

  const games = [
    {
      name: "Rock, Paper, Scissors",
      component: RockPaperScissors,
    },
  ];

  let name = "";
  let message = "";
  let startGame = false;
  let selectedGame = null;

  function setName() {
    message = "";
    name = name
      .replace(/[^\w -]/g, "")
      .substr(0, 16)
      .trim();
    if (name.toLowerCase() === "your name") {
      message = "Very funny";
      name = "";
      return;
    }

    PlayerName.set(name || "You");
    startGame = true;
  }

  function reset() {
    startGame = false;
    selectedGame = null;
  }

  function pick(game) {
    selectedGame = game;
  }

  function handleKeydown(e) {
    const key = e.key.toUpperCase();
    if (key === "ESCAPE") {
      return reset();
    }

    if (selectedGame !== null) {
      return;
    }

    if (startGame) {
      const gameKeys = [...Array(games.length + 1).keys()].map(String);
      gameKeys.shift();

      const index = gameKeys.indexOf(key);
      if (index !== -1) {
        return pick(games[index]);
      }
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  {#if startGame}
    {#if selectedGame === null}
      <h1>Select a game to play</h1>
      {#each games as game, index}
        <button on:click={() => pick(game)}>
          {game.name}
          <span class="keycode">{index + 1}</span>
        </button>
      {/each}
    {:else}
      <svelte:component this={selectedGame.component} />
    {/if}

    <br />
    <button class="inverted" on:click={reset}>
      <i class="fa fa-fw fa-chevron-left" />
      Start over
      <span class="keycode">Esc</span>
    </button>
  {:else}
    <h1>Let's play a game</h1>
    <form on:submit|preventDefault={setName}>
      <div class="form-control">
        <label for="name">Enter your name</label>

        <p>
          <small>{message}</small>
        </p>

        <input
          name="name"
          id="name"
          type="text"
          bind:value={name}
          autofocus
          maxlength="16" />
      </div>

      <button type="submit">
        <i class="fa fa-fw fa-flag" />
        Start
        <span class="keycode">Enter</span>
      </button>
    </form>
  {/if}
</main>

<Footer />

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 10;
    min-height: calc(100vh - 8rem);
    padding: 1rem;
    font-size: 1.6em;
    max-width: 640px;
    margin: 0 auto;
  }

  @media screen and (max-width: 400px) {
    main {
      font-size: 1.4em;
      max-width: 100%;
    }
  }
</style>
