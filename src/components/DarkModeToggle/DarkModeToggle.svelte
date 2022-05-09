<script>
  import Circle from "../../svgs/Circle.svelte";
  import Square from "../../svgs/Square.svelte";

  export let toggleView;

  const toggleViewMode = () => (toggleView = !toggleView);
</script>

<button class="toggle-test" on:click={toggleViewMode}>
  <div class="toggle-test-inner">
    {#if toggleView === false}
      <svelte:component this={Circle} />
    {:else if toggleView === true}
      <svelte:component this={Square} />
    {/if}
  </div>
</button>

<style lang="scss">
  $btn-width: 40px;
  $btn-height: 40px;
  $btn-font-size: 12px;

  .toggle-test {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $btn-height;
    width: $btn-width;
    padding: 12px 6px;
    font-size: $btn-font-size;
    font-weight: 700;
    transition: all 0.4s ease;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      height: calc($btn-height + 2%);
      width: calc($btn-width + 1%);
    }

    .toggle-test-inner {
      display: flex;
      align-items: center;
    }
  }

  :global(svg) {
    display: block;
    /* max-width: 100px; */
    /* max-height: 100px; */
  }
</style>
