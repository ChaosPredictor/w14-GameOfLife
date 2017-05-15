require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Matrix extends React.Component {
  constructor(props) {
    super(props);
		this.handleCreateTable = this.handleCreateTable.bind(this);
  }

	handleCreateTable(tableData) {
  var table = document.createElement('table');
	table.style.border = "1px solid #000"
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
			cell.style.border = "1px solid #000"
    });
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
}
	render() {
		var matrix = [];
		for(var i=0; i<9; i++) {
			matrix[i] = [];
			for(var j=0; j<9; j++) {
				matrix[i][j] = 'row: '+ i + '/col: ' + j;
			}
		}
		this.handleCreateTable(matrix);
		return (
			<table>
				Let's see
			</table>
		)
	}
}

class MainComponent extends React.Component {
	
  constructor(props) {
    super(props);
  }

	render() {
    return (
      <div className="main">
				<Matrix />
			</div>
    );
  }
}

export default MainComponent;
