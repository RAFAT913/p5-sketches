class Piece {
    constructor(i, j, type) {
        this.i = i
        this.j = j
        this.type = type
        this.type = type
        this.cells = []
        this.type_str

        this.get_cells()
        this.calc_cells()
    }

    get_cells() {
        switch(this.type) {
            case 'J': this.type_str = "000 111 001"; break;
            case 'L': this.type_str = "000 111 100"; break;
            case 'S': this.type_str = "011 110 000"; break;
            case 'Z': this.type_str = "110 011 000"; break;
            case 'C': this.type_str = "010 011 000"; break;
            case 'I': this.type_str = "000 111 000"; break;
            case '2': this.type_str = "000 110 000"; break;
            case ':': this.type_str = "000 101 000"; break;
            case '.': this.type_str = "000 010 000"; break;
        }
    }

    calc_cells() {
        this.type_str.split(' ').forEach((r, j) => {
            this.cells.push([])
            r.split('').forEach((s, i) => {
                if (s == '1') {
                    let cell = new Cell(this.i + i, this.j + j)
                    cell.col = "red"
                    this.cells[j][i] = cell
                } else {
                    this.cells[j][i] = undefined
                }
            })
        })
    }


    move(i, j) {
        this.i += i
        this.j += j
        this.calc_cells()
    }


    rotate() {
        this.cells = this.transpose_arr(this.cells, 3)
        console.log(this.cells)
    }

    transpose_arr(arr, arr_len){
        var arr_rot = []
        for(var i = 0; i < arr.length; i++){
            arr_rot.push([])
        }
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr_len; j++){
                arr_rot[j].push(arr[i][j])
            }
        }
        return arr_rot
    }


    render() {
        this.cells.forEach((a, i) => {
            a.forEach((c, i) => {
                if (c != undefined) c.render()
            })
        })
    }
}