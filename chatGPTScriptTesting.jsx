app.beginUndoGroup("Create Dark Muted Triangles");

// Create a new composition
var comp = app.project.items.addComp("Dark Muted Triangles", 1920, 1080, 1, 10, 29.97);

// Create 100 triangle shape layers
for (var i = 0; i < 100; i++) {
  // Generate a random, dark muted color
  var r = Math.floor(Math.random() * 128) / 255; // random value from 0 to 127
  var g = Math.floor(Math.random() * 128) / 255; // random value from 0 to 127
  var b = Math.floor(Math.random() * 128) / 255; // random value from 0 to 127
  var color = [r, g, b];
  
  // Create a new shape layer
  var shapeLayer = comp.layers.addShape();
  shapeLayer.name = "Triangle " + (i+1);
  
  // Create a triangle path in the shape layer
  var triangle = new Shape();
  triangle.vertices = [[50,0], [0,100], [100,100]];
  triangle.closed = true;
  var path = shapeLayer.property("Contents").addProperty("ADBE Vector Shape - Group");
  path.property("Path").setValue(triangle);
  
  // Set the fill color of the triangle
  var fill = shapeLayer.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  fill.property("Color").setValue(color);
  
  // Set the position of the layer to a random location
  shapeLayer.position.setValue([Math.random()*1920, Math.random()*1080]);
}

comp.openInViewer();

app.endUndoGroup();
