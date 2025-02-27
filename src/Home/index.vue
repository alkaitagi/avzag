<template>
  <div id="root">
    <Map :catalogue="catalogue">
      <template #default="{ map }">
        <template v-if="map">
          <Marker
            v-for="l in catalogue"
            :key="l.name"
            :map="map"
            :lect="l"
            :search="search"
            @click="toggleLect(l.name)"
          />
        </template>
      </template>
    </Map>
    <div id="ui" class="col-1">
      <div id="top" class="col-1 card">
        <div class="row-1">
          <toggle v-model="about" icon="info" />
          <InputQuery v-model="query" placeholder="Search languages..." />
          <btn icon="arrow_forward" :disabled="empty" @click="load" />
        </div>
        <div class="row scroll">
          <p v-if="empty" id="placeholder">
            Click on the map or use the input field above.
          </p>
          <btn
            v-for="n in search.selected"
            :key="n"
            :text="n"
            class="small round"
            @click="toggleLect(n)"
          />
        </div>
      </div>
      <div class="col-1 scroll">
        <div v-if="about" id="about" class="col-1 card text-center small">
          <h1>Ævzag</h1>
          <div class="row-1 wrap center">
            <router-link to="/editor/phonology">
              <btn icon="construction" text="Editor" />
            </router-link>
            <a href="https://t.me/raxysstudios" class="wrap">
              <btn icon="forum" text="Channel" />
            </a>
            <a href="https://github.com/raxysstudios/avzag_deprecated#credits" class="wrap">
              <btn icon="groups" text="Credits" />
            </a>
            <a href="https://github.com/raxysstudios/avzag_deprecated" class="wrap">
              <btn icon="code" text="Repository" />
            </a>
          </div>
        </div>
        <Card
          v-for="l in catalogue"
          :key="l.name"
          :lect="l"
          :search="search"
          @click="toggleLect(l.name)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
import Map from "./Map.vue";
import Marker from "./Marker.vue";

import { computed, ref, defineComponent, toRaw, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { cache, checkOutdated, lects, loadJSON, storage } from "@/store";
import { catalogue, search, query } from "./main";

export default defineComponent({
  components: { Card, Map, Marker },
  setup() {
    const router = useRouter();
    onUnmounted(async () => {
      cache.update("lects");
      lects.value = [...search.selected];
      await storage.setItem("lects", toRaw(lects.value));
      await checkOutdated();
    });
    watch(
      lects,
      () => {
        if (!search.selected.size && lects.value.length)
          lects.value.forEach((l) => search.selected.add(l));
      },
      { immediate: true }
    );

    if (navigator.onLine) {
      delete cache.records.value["catalogue.json"];
      caches
        .keys()
        .then((ks) => ks.find((k) => k.includes("avzag-precache")))
        .then((k) => caches.delete(k ?? ""));
    }
    loadJSON("catalogue", []).then((j) => (catalogue.value = j));

    const empty = computed(() => !search.selected.size);
    const about = ref(false);

    function toggleLect(name: string) {
      if (search.selected.has(name)) search.selected.delete(name);
      else search.selected.add(name);
    }
    function load() {
      router.push(
        localStorage.urlUser
          ? { path: localStorage.urlUser }
          : { name: "phonology" }
      );
    }

    return { catalogue, query, search, empty, about, toggleLect, load };
  },
});
</script>

<style lang="scss">
.mapboxgl-ctrl {
  &-attrib {
    background-color: var(--color-active) !important;
    border-radius: 0;
    border-top-left-radius: $border-radius;
  }
  .mapboxgl-ctrl-attrib-button {
    opacity: 0.6;
  }
  a {
    opacity: 0.6;
    color: var(--color-text);
    &:hover {
      opacity: 1;
      background-color: transparent;
    }
  }
}
</style>

<style lang="scss" scoped>
$margin: -1 * map-get($margins, "normal");

#root {
  position: relative;
  width: 100%;
  height: 100%;
  > * {
    left: $margin;
    top: $margin;
  }
}
#ui {
  padding: -$margin;
  height: 100vh;
  width: 0.75 * $mobile-width;
  position: absolute;
  z-index: 2;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
  > .scroll {
    max-height: 100%;
    padding: -1 * $margin;
    margin: $margin;
  }
}
#placeholder {
  line-height: map-get($button-height, "small");
}
@media only screen and (max-width: $mobile-width) {
  #ui {
    width: 100vw;
  }
}
</style>
