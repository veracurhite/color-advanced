let b: number
let paletteDictionary: any = {}
let paleet: Array<number>

//% block="Color-Advanced"
//% color=#003300
//% icon="\uf043"


namespace advancedColor {
    //% block="Add palette with colors $color1 $color2 $color3 $color4 $color5 $color6 $color7 $color8 $color9 $color10 $color11 $color12 $color13 $color14 $color15 with name $name"
    export function addPalette(color1: color, color2: color, color3: color, color4: color, color5: color, color6: color, color7: color, color8: color, color9: color, color10: color, color11: color, color12: color, color13: color, color14: color, color15: color, name: string){
        paletteDictionary[name] = [color1,color2,color3,color4,color5,color6,color7,color8,color9,color10,color11,color12,color13,color14,color15]
    }
    //% block="Load palette with name $name"
    export function loadPalette(name: string){
        paleet = paletteDictionary[name]
        for(b=1;b<=15;b++){
            color.setColor(b,paleet[b])
        }
    }
}