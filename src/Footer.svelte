<script>
  let year = new Date().getFullYear();
  let links = [
    {
      type: "github",
      url: "https://github.com/richarddewit",
      title: "Github - richarddewit",
    },
    {
      type: "twitter",
      url: "https://twitter.com/sneetzle",
      title: "Twitter - @Sneetzle",
    },
    {
      type: "stack-overflow",
      url: "https://stackoverflow.com/users/1062281/richard-de-wit",
      title: "Stack Overflow - Richard de Wit",
    },
  ];
</script>

<footer>
  <section>&copy; {year} Richard de Wit</section>
  <section>
    <ul class="list-inline">
      {#each links as link}
        <li>
          <a
            href={link.url}
            target="_blank"
            class="icon-link"
            title={link.title}>
            <i class="fa fa-fw fa-{link.type}" />
          </a>
        </li>
      {/each}
    </ul>
  </section>
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.5rem 1rem;
    height: 4rem;
    text-align: center;
  }

  .list-inline {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-link {
    color: #e3d5ba;
    display: block;
    margin: 0 0.5em;
  }

  .icon-link:hover {
    color: #e86701;
  }
</style>
