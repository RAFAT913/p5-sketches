function tilePush(t) {
    t.init()
    tiles.push(t)
}

function setMonopolyLayout() {
    let w = width
    let h = height
    let tw = tile_width
    let th = tile_height
    
    tilePush(new Tile(0 , w - tw*2 , h - th, true , 's'))
    tilePush(new Tile(1 , w - tw*3 , h - th, false, 's'))
    tilePush(new Tile(2 , w - tw*4 , h - th, false, 's'))
    tilePush(new Tile(3 , w - tw*5 , h - th, false, 's'))
    tilePush(new Tile(4 , w - tw*6 , h - th, false, 's'))
    tilePush(new Tile(5 , w - tw*7 , h - th, false, 's'))
    tilePush(new Tile(6 , w - tw*8 , h - th, false, 's'))
    tilePush(new Tile(7 , w - tw*9 , h - th, false, 's'))
    tilePush(new Tile(8 , w - tw*10, h - th, false, 's'))
    tilePush(new Tile(9 , w - tw*11, h - th, false, 's'))
    
    tilePush(new Tile(10, th, h - th/2 *2 , true , 'w'))
    tilePush(new Tile(11, th, h - th/2 *3 , false, 'w'))
    tilePush(new Tile(12, th, h - th/2 *4 , false, 'w'))
    tilePush(new Tile(13, th, h - th/2 *5 , false, 'w'))
    tilePush(new Tile(14, th, h - th/2 *6 , false, 'w'))
    tilePush(new Tile(15, th, h - th/2 *7 , false, 'w'))
    tilePush(new Tile(16, th, h - th/2 *8 , false, 'w'))
    tilePush(new Tile(17, th, h - th/2 *9 , false, 'w'))
    tilePush(new Tile(18, th, h - th/2 *10, false, 'w'))
    tilePush(new Tile(19, th, h - th/2 *11, false, 'w'))
  
    tilePush(new Tile(20, tw *2 , th,  true, 'n'))
    tilePush(new Tile(21, tw *3 , th, false, 'n'))
    tilePush(new Tile(22, tw *4 , th, false, 'n'))
    tilePush(new Tile(23, tw *5 , th, false, 'n'))
    tilePush(new Tile(24, tw *6 , th, false, 'n'))
    tilePush(new Tile(25, tw *7 , th, false, 'n'))
    tilePush(new Tile(26, tw *8 , th, false, 'n'))
    tilePush(new Tile(27, tw *9 , th, false, 'n'))
    tilePush(new Tile(28, tw *10, th, false, 'n'))
    tilePush(new Tile(29, tw *11, th, false, 'n'))
  
    tilePush(new Tile(30, w - th, tw *2 ,  true, 'e'))
    tilePush(new Tile(21, w - th, tw *4 , false, 'e'))
    tilePush(new Tile(21, w - th, tw *3 , false, 'e'))
    tilePush(new Tile(22, w - th, tw *5 , false, 'e'))
    tilePush(new Tile(23, w - th, tw *6 , false, 'e'))
    tilePush(new Tile(24, w - th, tw *7 , false, 'e'))
    tilePush(new Tile(25, w - th, tw *8 , false, 'e'))
    tilePush(new Tile(26, w - th, tw *9 , false, 'e'))
    tilePush(new Tile(27, w - th, tw *10, false, 'e'))
    tilePush(new Tile(28, w - th, tw *11, false, 'e'))
}