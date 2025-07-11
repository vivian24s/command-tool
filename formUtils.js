// 共通フォームユーティリティ
// 他のツールやHTMLからも利用できるように関数をまとめています。

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
function set_id_attribute_modifiers(){
	var min = -1000000000;
	var max = 1000000000;
	for(var i = 0; i < form.id.length; i++){
		form.id[i].value = Math.floor(Math.random() * (max - min) + min);
	}
	makeCommand();
}
function reset_attribute_modifiers(){
	for(var i = 0; i < form.amount.length; i++){
		form.amount[i].value = "";
		form.slot[i].value = "";
		form.id[i].value = "";
	}
	
	makeCommand();
	
}

function set_banner_patterns(form) {
    let patterns = [];
    for(let i=1; i<=5; i++) {
        let pattern = form[`banner_pattern${i}`]?.value;
        let color = form[`banner_color${i}`]?.value;
        if(pattern && color) {
            patterns.push(`{pattern:\"${pattern}\",color:\"${color}\"}`);
        }
    }
    if(patterns.length > 0){
        return `banner_patterns=[${patterns.join(",")}]`;
    } else {
        return "";
    }
}
function set_base_color(form) {
    if(form.base_color && form.base_color.value !== ""){
        return `base_color=\"${form.base_color.value}\"`;
    } else {
        return "";
    }
}
function set_bees(form) {}
function set_block_entity_data(form) {}
function set_block_state(form) {}
function set_blocks_attacks(form) {}
function set_break_sound(form) {}
function set_bucket_entity_data(form) {}
function set_bundle_contents(form) {}
function set_can_break(form) {}
function set_can_place_on(form) {}
function set_charged_projectiles(form) {}
function set_consumable(form) {}
function set_container(form) {}
function set_container_loot(form) {}
function set_custom_data(form) {
    if(form.custom_data && form.custom_data.value !== ""){
        return `custom_data={${form.custom_data.value}}`;
    } else {
        return "";
    }
}
function set_custom_model_data(form) {}
function set_custom_name(form) {
    let component_custom_name = "";
    if(form.custom_name.value !== ""){
        component_custom_name = "custom_name='" + form.custom_name.value + "'";
    }
    return component_custom_name;
}
function set_damage(form) {
    if(form.damage.value !== ""){
        return "damage=" + form.damage.value;
    } else {
        return "";
    }
}
function set_damage_resistant(form) {}
function set_death_protection(form) {}
function set_debug_stick_state(form) {}
function set_dyed_color(form) {
    if(form.dyed_color_flag.value !== ""){
        return "dyed_color=" + parseInt(form.dyed_color.value.substr(1, 6), 16);
    } else {
        return "";
    }
}
function set_enchantable(form) {}
function set_enchantment_glint_override(form) {}
function set_enchantments(form) {
    let enchantments = {};
    for(let i = 0; i < form.enchantments_levels.length; i++){
        if(form.enchantments_levels[i].value !== ""){
            enchantments[form.enchantments_levels[i].title] = parseInt(form.enchantments_levels[i].value);
        }
    }
    if(Object.keys(enchantments).length > 0){
        return "enchantments=" + JSON.stringify(enchantments);
    } else {
        return "";
    }
}
function reset_enchantments(){
	for(var i = 0; i < form.enchantments_levels.length; i++){
		form.enchantments_levels[i].value = "";
	}
	
	makeCommand();
	
}
function set_entity_data(form) {}
function set_equippable(form) {}
function set_firework_explosion(form) {}
function set_fireworks(form) {}
function set_food(form) {}
function set_glider(form) {}
function set_instrument(form) {}
function set_intangible_projectile(form) {}
function set_item_model(form) {}
function set_item_name(form) {}
function set_jukebox_playable(form) {}
function set_lock(form) {}
function set_lodestone_tracker(form) {}
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
function set_map_color(form) {}
function set_map_decorations(form) {}
function set_map_id(form) {}
function set_max_damage(form) {}
function set_max_stack_size(form) {}
function set_note_block_sound(form) {}
function set_ominous_bottle_amplifier(form) {}
function set_pot_decorations(form) {}
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
function set_potion_duration_scale(form) {}
function set_profile(form) {}
function set_provides_banner_patterns(form) {}
function set_provides_trim_material(form) {}
function set_rarity(form) {
    if (form.rarity && form.rarity.value !== "") {
        return `rarity=\"${form.rarity.value}\"`;
    } else {
        return "";
    }
}
function set_recipes(form) {}
function set_repair_cost(form) {}
function set_repairable(form) {}
function set_stored_enchantments(form) {}
function set_suspicious_stew_effects(form) {}
function set_tool(form) {}
function set_tooltip_display(form) {
    // 値取得
    const hideTooltip = form.hide_tooltip.value;
    const selectedOptions = form.hidden_components && form.hidden_components.selectedOptions;
    let hiddenComponents = [];
    if (selectedOptions) {
        for (let i = 0; i < selectedOptions.length; i++) {
            hiddenComponents.push('"' + selectedOptions[i].value + '"');
        }
    }
    // hide_tooltipが未設定なら出力しない
    if (!hideTooltip) return "";
    // オブジェクト構築
    let obj = [];
    obj.push(`hide_tooltip:${hideTooltip}`);
    if (hiddenComponents.length > 0) obj.push(`hidden_components:[${hiddenComponents.join(",")}]`);
    return `tooltip_display={${obj.join(",")}}`;
}
function set_tooltip_style(form) {}
function set_trim(form) {
    let trim = {};
    if(form.material.value !== "" && form.pattern.value !== ""){
        trim.material = form.material.value;
        trim.pattern = form.pattern.value;
        return "trim=" + JSON.stringify(trim);
    } else {
        return "";
    }
}
function set_unbreakable(form) {
    if(form.unbreakable.value !== ""){
        return "unbreakable={}";
    } else {
        return "";
    }
}
function set_use_cooldown(form) {}
function set_use_remainder(form) {}
function set_weapon(form) {}
function set_writable_book_content(form) {}
function set_written_book_content(form) {}
