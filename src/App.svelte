<script>
  import Footer from "@/Footer.svelte";
  import RockPaperScissors from "@/RPS/RockPaperScissors.svelte";

  import { PlayerName } from "@/stores";

  let name = "";
  let startGame = false;

  function setName() {
    let n = name.substr(0, 16);
    PlayerName.set(n || "You");
    startGame = true;
  }

  function reset() {
    startGame = false;
  }
</script>

<main>
  {#if startGame}
    <RockPaperScissors />

    <button on:click={reset}>
      <i class="fa fa-fw fa-chevron-left" />
      Start over
    </button>
  {:else}
    <h1>Let's play a game</h1>
    <form on:submit|preventDefault={setName}>
      <div class="form-control">
        <label for="name">What's your name?</label>
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
