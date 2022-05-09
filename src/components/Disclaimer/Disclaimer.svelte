<script>
  export let store;

  const closeDisclaimer = () => {
    console.log("close");
  };
</script>

<div class="disclaimer-wrapper">
  <div class="disclaimer-inner">
    <div class="disclaimer-inner-close">
      <button class="disclaimer-inner-btn-close" on:click={closeDisclaimer}>
        <span />
        <span />
      </button>
    </div>
    <h3>&lt;Disclaimer&sol;&gt;</h3>
    <p>Generic text</p>
  </div>
</div>

<style lang="scss">
  .disclaimer-wrapper {
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    width: 90%;
    max-width: 1080px;
    height: 100px;
    margin: 0 auto;
    color: white;
    transform: translate(-50%, 0%);
    border: 1px solid red;
    border-radius: 12px;

    .disclaimer-inner {
      position: relative;
      background-color: hsl(349, 100%, 50%);
      height: 100%;
      padding: 12px 16px;
      border-radius: 12px;

      .disclaimer-inner-close {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);

        .disclaimer-inner-btn-close {
          position: relative;
          background-color: transparent;
          width: 40px;
          height: 40px;
          border: 1px solid transparent;
          border-radius: 50%;
          cursor: pointer;

          span:nth-child(1) {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            width: 5px;
            height: 20px;
            background-color: white;
            transform: translate(-50%, -50%) rotate(45deg);
          }
          span:nth-child(2) {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            width: 5px;
            height: 20px;
            background-color: white;
            transform: translate(-50%, -50%) rotate(135deg);
          }
        }
      }
    }
  }
</style>
