// 共通フォームユーティリティ
// 他のツールやHTMLからも利用できるように関数をまとめています。

function set_custom_name(form) {
    //変数定義
    let component_custom_name = "";
    //コンポーネント組み込み
    if(form.custom_name.value !== ""){
        component_custom_name = "custom_name='" + form.custom_name.value + "'";
    }
    return component_custom_name;
}

function set_lore(form) {
    let lore = [];
    if(form.lore[0].value !== ""){
        lore.push('"' + form.lore[0].value + '"');
    }
    if(form.lore[1].value !== ""){
        lore.push('"' + form.lore[1].value + '"');
    }
    if(form.lore[2].value !== ""){
        lore.push('"' + form.lore[2].value + '"');
    }
    if(form.lore[3].value !== ""){
        lore.push('"' + form.lore[3].value + '"');
    }
    if(lore.length > 0){
        return "lore=[" + lore + "]";
    } else {
        return "";
    }
}

function set_potion_contents(form) {
    let potion_contents = {};
    let custom_effects = [];
    if(form.potion.value !== ""){
        potion_contents.potion = form.potion.value;
    }
    if (form.custom_color_flag.value !== "") {
        potion_contents.custom_color = parseInt(form.custom_color.value.substr(1, 6), 16);
    }
    for(let i = 0; i < form.amplifier.length; i++){
        if(form.amplifier[i].value !== ""){
            let str = {};
            str.id = form.amplifier[i].title;
            str.amplifier = form.amplifier[i].value - 1;
            str.duration = form.duration[i].value * 20;
            if (form.show_particles_show_icon[i].value == "show_icon") {
                str.show_icon = false;
            } else if (form.show_particles_show_icon[i].value == "show_particles") {
                str.show_particles = false;
            }
            custom_effects.push(str);
        }
    }
    if(custom_effects.length > 0){
        potion_contents.custom_effects = custom_effects;
    }
    if(Object.keys(potion_contents).length !== 0){
        return "potion_contents=" + JSON.stringify(potion_contents);
    } else {
        return "";
    }
}

function set_attribute_modifiers(form) {
    let attribute_modifiers = [];
    for(let i = 0; i < form.amount.length; i++){
        if(form.amount[i].value !== ""){
            let str = {};
            str.type = form.amount[i].title;
            str.amount = parseFloat(form.amount[i].value);
            str.operation = "add_value";
            if(form.slot[i].value !== ""){
                str.slot = form.slot[i].value;
            }
            if(form.id[i].value !== ""){
                str.id = form.id[i].value;
            }
            attribute_modifiers.push(str);
        }
    }
    if(attribute_modifiers.length > 0){
        return "attribute_modifiers=" + JSON.stringify(attribute_modifiers);
    } else {
        return "";
    }
}

// 必要に応じて他の関数も追加してください。
