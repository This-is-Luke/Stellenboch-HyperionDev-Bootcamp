import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhpcy1pcy1sdWtlIiwiYSI6ImNsaDB4M25vaDBlMXozZW9oaDZheDlxYzAifQ.ImJp9FFUYuaw1V2kaxgqQA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-70.9, 42.35],
    zoom: 9
});
