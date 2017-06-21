var parameters = {
  target: '#myFunction',
  data: [
  {
    fn: 'cos(x)', 
    color: 'orange'
  }      
        ],
  grid: true,
  yAxis: {domain: [-2, 2]},
  xAxis: {domain: [0, 5*Math.PI]}
};

function plot(){
	var f = document.querySelector("#function").value;
	var xMin = document.querySelector("#xMin").value;
	var xMax = document.querySelector("#xMax").value;
	var yMin = document.querySelector("#yMin").value;
	var yMax = document.querySelector("#yMax").value
	var color = document.querySelector('#color').value;
	parameters.data[0].color = color;
	parameters.data[0].fn = f;
	parameters.xAxis.domain = [xMin, xMax];
	parameters.yAxis.domain = [yMin, yMax];
	functionPlot(parameters);
}

