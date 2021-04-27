#! /bin/sh

src=./atlas.png
out=./assets
w=16
h=16



# Init a 4x5 matrix
layout=(
"l_ver  l_hor   X       X"
"l_t    l_r     l_l     l_b"
"l_c_tl l_c_tr  l_c_bl  l_c_br"
"X      X       X       X"
"s_ver  s_hor   X       X"
"s_h_t  s_h_r   s_h_l   s_h_b"
"s_c_tl s_c_tr  s_c_bl  s_c_br"
"s_t_t  s_t_r   s_t_l   s_t_b"
)

x=0
y=0



for row in "${layout[@]}"; do

    for col in $row; do

        if [ $col = X ]; then
            continue
        fi

        convert $src -crop 16x16+$x+$y $out/$col.png
        let x=$x+$w

    done

    let y=$y+$h
    x=0

done





#   in case a setting function is ever needed
#layout_set() {
#  row=$1
#  col=$2
#  value=$3
#  IFS=' ' read -r -a tmp <<< "${a[$row]}"
#  tmp[$col]=$value
#  layout[$row]="${tmp[@]}"
#}

#   usage
#   layout_set 2 3 9999
