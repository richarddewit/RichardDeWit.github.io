<script>
 import Footer from "@/Footer.svelte";
 import RockPaperScissors from "@/RPS/RockPaperScissors.svelte";
</script>

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
   text-shadow: #e3d5bacc 1px 1px 5px;
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

<main>
  <RockPaperScissors/>
</main>

<Footer/>
