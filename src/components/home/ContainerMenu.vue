<template>
  <div class="cards">
    <router-link to="/army">
      <div class="card" style="box-shadow: 0 5px 10px rgba(0,0,0,.8)">
        <div class="card-image" style="background: transparent">
          <figure class="image">
            <img src="../../assets/home/ork.jpg" alt="Armies">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Armies</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/stratagem">
      <div class="card" style="box-shadow: 0 5px 10px rgba(0,0,0,.8)">
        <div class="card-image" style="background: transparent">
          <figure class="image">
            <img src="../../assets/home/necron.jpg" alt="Stratagems">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Stratagems</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/match">
    <div class="card" style="box-shadow: 0 5px 10px rgba(0,0,0,.8)">
      <div class="card-image" style="background: transparent">
        <figure class="image">
          <img src="../../assets/home/blood.jpg" alt="Matchs">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Matchs</p>
          </div>
        </div>
      </div>
    </div>
    </router-link>
      <div class="card" style="box-shadow: 0 5px 10px rgba(0,0,0,.8)">
        <div class="card-image" style="background: transparent">
          <figure class="image">
            <img src="../../assets/home/renegade.jpg" alt="Match Requests">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Match Requests</p>
            </div>
          </div>
        </div>
      </div>
    <div class="card" style="box-shadow: 0 5px 10px rgba(0,0,0,.8)">
      <div class="card-image" style="background: transparent">
        <figure class="image">
          <img src="../../assets/home/marine.jpg" alt="Personal objectives">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Personal objectives</p>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerMenu',
  components: {},
  props: {
  }
}
</script>

<style scoped>
  .cards{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-gap: 0.5em;
  }

  .card{
    height: max-content;
    background-color: #363636;
    border-radius: .4rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
    cursor: pointer;
  }

  .card-content, .title {
    color: #fff;
    text-shadow: 0 1px 0 rgba(3,3,3, .3 )
  }
</style>
