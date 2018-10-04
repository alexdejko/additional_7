module.exports = function solveSudoku(matrix) {
let tmp = 0;
	function attempt(cell,digit,x,y) {
		if (cell[x][y] == tmp) {
			for (let i=0; i<=8; i++){
				if(cell[x][i] == digit) {
					return false;
				}
			}

			for (let j=0; j<=8; j++){
				if(cell[j][y] == digit) {
					return false;
				}	
			}

			let offsetX = Math.floor(x/3)*3;
			let offsetY = Math.floor(y/3)*3;
			
			for (let k=0; k<=2; ++k) {
				for (let m=0; m<=2; m++){
					if(digit == cell[offsetX+k][offsetY+m]){
						return false;
					}
				}
			}
			return true;
		}
		return false;
	};

	function solve(cell,x,y){
		if (x==9){
			x=0;
			y++;
			if(y==9){
				return true;
			}
		}
		if (cell[x][y] !== tmp){
			return solve(cell,x+1,y);
		}
		for (let digit = 1; digit <=9; digit++){
			if (attempt(cell,digit,x,y)){
				cell[x][y]=digit;

				if (solve(cell,x+1,y)){
					return true
				}
				cell[x][y]=tmp;
			}

		}
	return false;
	}

solve(matrix,0,0);
return matrix;
}







  