// let scene, camera, render, light;
// let geometry, material, stats;
//
// function init() {
//     let container = document.getElementById('area');
//
//     let width = window.innerWidth,
//         height = window.innerHeight;
//
//     container.setAttribute('width', width + 'px');
//     container.setAttribute('height', height + 'px');
//
//     camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100000);
//     camera.position.set(0, 0, 1);
//
//     scene = new THREE.Scene();
//     render = new THREE.WebGLRenderer({canvas: container});
//     render.setClearColor(0x231f20);
//
//     let geometry = new THREE.SphereGeometry(5, 32, 32),
//         material = new THREE.PointsMaterial({
//             color: 0x322f31,
//             size: 3,
//             sizeAttenuation: false,
//             alphaTest: 0.5,
//             transparent: true
//         }),
//         group = new THREE.Object3D();
//
//
//     stats = new Stats();
//     document.body.appendChild( stats.dom );
//
//     for (let i = 0; i < 500; i++) {
//
//         let sphere = new THREE.Points(geometry, material);
//         sphere.position.x = Math.random() * width - width / 2;
//         sphere.position.y = Math.random() * width - width / 2;
//         sphere.position.z = Math.random() * height - height / 2;
//
//         sphere.rotation.x = Math.random() * 360 * 180 / Math.PI;
//         sphere.rotation.y = Math.random() * 360 * 180 / Math.PI;
//         sphere.rotation.z = Math.random() * 360 * 180 / Math.PI;
//         group.add(sphere);
//     }
//     scene.add(group);
//
// }
//
// function loop() {
//
//     // camera.position.y -= 1;
//     // camera.position.x -= 1;
//     requestAnimationFrame(function () {
//
//         loop();
//     });
//     render.render(scene, camera);
//     camera.position.z -= 1;
//     stats.update();
// }
//
//
// init();
// loop();

//
// var camera, scene, renderer, stats, material;
// var mouseX = 0, mouseY = 0;
// let container = document.getElementById('area');
// let width = window.innerWidth,
//     height = window.innerHeight;
// container.setAttribute('width', width + 'px');
// container.setAttribute('height', height + 'px');
//
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
// init();
// animate();
//
// function init() {
//     camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
//     camera.position.z = 1000;
//     scene = new THREE.Scene();
//     scene.fog = new THREE.FogExp2(0x231f20, 0.001);
//     var geometry = new THREE.BufferGeometry();
//     var vertices = [];
//     // var sprite = new THREE.TextureLoader().load('textures/sprites/disc.png');
//     for (var i = 0; i < 10000; i++) {
//         var x = 2000 * Math.random() - 1000;
//         var y = 2000 * Math.random() - 1000;
//         var z = 2000 * Math.random() - 1000;
//         vertices.push(x, y, z);
//     }
//     geometry = new THREE.SphereGeometry(100, 50, 50);
//     material = new THREE.PointsMaterial({
//         size: 35,
//         sizeAttenuation: false,
//         color: 0x322f31,
//         alphaTest: 0.5,
//         transparent: true
//     });
//     material.color.setHSL(1.0, 0.3, 0.7);
//     var particles = new THREE.Points(geometry, material);
//     scene.add(particles);
//     //
//     renderer = new THREE.WebGLRenderer();
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//
//     stats = new Stats();
//     document.body.appendChild(stats.dom);
//
//     var gui = new dat.GUI();
//     gui.add(material, 'sizeAttenuation').onChange(function () {
//         material.needsUpdate = true;
//     });
//     gui.open();
//     //
//     document.addEventListener('mousemove', onDocumentMouseMove, false);
//     document.addEventListener('touchstart', onDocumentTouchStart, false);
//     document.addEventListener('touchmove', onDocumentTouchMove, false);
//     //
//     window.addEventListener('resize', onWindowResize, false);
// }
//
// function onWindowResize() {
//     windowHalfX = window.innerWidth / 2;
//     windowHalfY = window.innerHeight / 2;
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }
//
// function onDocumentMouseMove(event) {
//     mouseX = event.clientX - windowHalfX;
//     mouseY = event.clientY - windowHalfY;
// }
//
// function onDocumentTouchStart(event) {
//     if (event.touches.length == 1) {
//         event.preventDefault();
//         mouseX = event.touches[0].pageX - windowHalfX;
//         mouseY = event.touches[0].pageY - windowHalfY;
//     }
// }
//
// function onDocumentTouchMove(event) {
//     if (event.touches.length == 1) {
//         event.preventDefault();
//         mouseX = event.touches[0].pageX - windowHalfX;
//         mouseY = event.touches[0].pageY - windowHalfY;
//     }
// }
//
// //
// function animate() {
//     requestAnimationFrame(animate);
//     render();
//     stats.update();
// }
//
// function render() {
//     var time = Date.now() * 0.00005;
//     camera.position.x += (mouseX - camera.position.x) * 0.05;
//     camera.position.y += (-mouseY - camera.position.y) * 0.05;
//     camera.lookAt(scene.position);
//     var h = (360 * (1.0 + time) % 360) / 360;
//     material.color.setHSL(h, 0.5, 0.5);
//     renderer.render(scene, camera);
// }

let camera, scene, renderer, stats, group;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

$(document).ready(function () {

    if ($(window).outerWidth() > 767) {
        init();
        animate();
    }

    $(window).resize(function () {
        if ($(window).outerWidth() > 767) {
            init();
            animate();
        }
    });
});

function init() {
    let container = document.getElementById('area');

    let width = window.innerWidth,
        height = window.innerHeight;

    container.setAttribute('width', width + 'px');
    container.setAttribute('height', height + 'px');

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(0,0,1);
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x231f20 );
    scene.fog = new THREE.Fog( 0x231f20, 1, 10000 );
    let geometry = new THREE.SphereGeometry( 5, 32, 32 );
    // var material = new THREE.MeshNormalMaterial();
    let material = new THREE.PointsMaterial({
            color: 0x322f31,
            size: 6,
            sizeAttenuation: false,
            alphaTest: 0.5,
            transparent: true
        }),
    group = new THREE.Group();
    for ( var i = 0; i < 100; i ++ ) {
        var mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        group.add( mesh );
    }
    scene.add( group );
    //
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //
    // stats = new Stats();
    // document.body.appendChild( stats.dom );
    //
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //
    window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
function onDocumentMouseMove( event ) {
    mouseX = ( event.clientX - windowHalfX ) * 2;
    mouseY = ( event.clientY - windowHalfY ) * 2;
}
function animate() {
    requestAnimationFrame( animate );
    render();
    // stats.update();
}
function render() {
    // let time = Date.now() * 0.001;
    // let rx = Math.sin( time * 0.7 ) * 0.5,
    //     ry = Math.sin( time * 0.3 ) * 0.5;
        // rz = Math.sin( time * 0.2 ) * 0.5;
    camera.position.x += ( mouseX - camera.position.x ) * 0.00001 / 5;
    // camera.position.x += ( mouseX - camera.position.z ) * 0.001;
    camera.position.y += ( - mouseY - camera.position.y ) * 0.00001 / 5;
    camera.lookAt( scene.position );
    // group.rotation.x = rx;
    // group.rotation.y = ry;
    // group.rotation.z = rz;
    renderer.render( scene, camera );
}