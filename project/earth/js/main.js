var scene, camera, renderer, controls;
var SCREEN_WIDTH = window.innerWidth,
SCREEN_HEIGHT = window.innerHeight;

var VIEW_ANGLE = 100,
ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
NEAR = 1,
FAR = 20000;

var earth;
var moon;
var satellites = {}

init();
animate();

function initScene() {
    scene = new THREE.Scene();
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    camera.position.set(0, 1000, 2500);
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt(0, 0, 0);
    scene.add(camera);
}

function initRender() {
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        logarithmicDepthBuffer: true
    });
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container = document.getElementById('ThreeJS');
    container.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0.0);
}

function initControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function initLight() {

    var ambient = new THREE.AmbientLight(0xffffff, 1);
    ambient.position.set(0, 0, 0);
    scene.add(ambient);

}

function initEarthAndMoon() {

    earth = initObject('../img/earth.jpg', 800, 64, 64)
    scene.add(earth);
    moon = initObject('../img/moon.jpg', 50, 30, 30)
    moon.position.set(2000, 0, 0);
    initTrackAndObj(moon, 2000, -Math.PI * 0.60, Math.PI * 0.06, 0, "3")
    initSatellite(1000, -Math.PI * 0.60, Math.PI * 0.02, 0, "1");
    initSatellite(1000, -Math.PI * 0.02, Math.PI * 0.60, 0, "2");
}


function initObject(path, radius, segemnt, rings) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {};

    var texture = new THREE.Texture();
    var loader = new THREE.ImageLoader(manager);
    loader.load(path, function(image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    });
    var obj = new THREE.Mesh(
        new THREE.SphereGeometry(radius, segemnt, rings),
        material
    );

    return obj;
}

function initSatellite(radius, x, y, z, flag) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load("../obj/satellite.mtl", function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('../obj/satellite.obj', function(object) {
            object.scale.set(0.08, 0.08, 0.08);
            object.position.set(radius, 0, 0);
            initTrackAndObj(object, radius, x, y, z, flag);
        });
    });
}

function initTrackAndObj(object , radius, x, y, z, flag) {
    var track = new THREE.Mesh(new THREE.RingGeometry(radius, radius + 1, 64, 1), new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide
    }));
    var centerMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 1, 1), new THREE.MeshLambertMaterial());
    var pivotPoint = new THREE.Object3D();

    pivotPoint.add(object);
    pivotPoint.add(track);
    centerMesh.add(pivotPoint);
    centerMesh.rotation.set(x, y, z);
    satellites[flag] = centerMesh;
    scene.add(centerMesh);
}

function init() {
    initScene();
    initCamera();
    initRender();
    initControls();
    initLight();
    initEarthAndMoon();
}

function animate() {

    if (satellites["1"] != undefined && satellites["2"] != undefined) {
        satellites["1"].rotateZ(-0.01);
        satellites["2"].rotateZ(0.01);
        satellites["3"].rotateZ(-0.01);
    }

    earth.rotateY(-0.01);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    update();
}

function update() {
    controls.update();
}

const audio = () => {
this.listener_ = new THREE.AudioListener();
const sound = new THREE.PositionalAudio(this.listener_);

const loader = new THREE.AudioLoader();
    loader.load('../snd/galaxy.mp3', (buffer) => {
      setTimeout(() => {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(5.0);
        sound.setRefDistance(1);
        sound.play();
      }, 10);
    });
}
audio();