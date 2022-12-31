const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
window.gl = gl;

// Fill the canvas with color, actually clear the color
gl.clearColor(120, 0, 150, 1); // set the color, syntax: clearColor(red, green, blue, alpha) RGBA
gl.clear(gl.COLOR_BUFFER_BIT); // clear the canvas, gl.COLOR_BUFFER_BIT means the parts want to be cleared
