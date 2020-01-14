<script>
  import Score from "@/components/Score.svelte";

  export let title;
  export let description = "";
  export let playersScore;
  export let computersScore;
</script>

<h1>{title}</h1>

<p>
  <small>{description}</small>
</p>

<hr />

<Score {playersScore} {computersScore} />

<slot>Game here</slot>
