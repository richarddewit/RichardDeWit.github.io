<script>
  import { onDestroy } from "svelte";
  import { computerName } from "@/settings";
  import { PlayerName } from "@/stores";

  let playerName = "You";
  export let playersScore;
  export let computersScore;

  const playerNameUnsubscribe = PlayerName.subscribe(value => {
    playerName = value;
  });

  onDestroy(() => {
    playerNameUnsubscribe();
  });
</script>

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

<style>
  .score {
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 300px;
    margin: 1.2em 0;
    text-align: center;
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
    .score {
      margin: 0.5em 0;
    }
  }
</style>
