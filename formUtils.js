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
function set_bees(form) {
    if (form.bees_entity_data && form.bees_entity_data.value !== "" &&
        form.bees_ticks_in_hive && form.bees_ticks_in_hive.value !== "" &&
        form.bees_min_ticks_in_hive && form.bees_min_ticks_in_hive.value !== "") {
        var entity_data = form.bees_entity_data.value;
        var ticks_in_hive = form.bees_ticks_in_hive.value;
        var min_ticks_in_hive = form.bees_min_ticks_in_hive.value;
        // entity_dataはそのまま展開
        return 'bees=[{entity_data:' + entity_data + ',ticks_in_hive:' + Number(ticks_in_hive) + ',min_ticks_in_hive:' + Number(min_ticks_in_hive) + '}]';
    } else {
        return '';
    }
}
function set_block_entity_data(form) {
    if(form.block_entity_data && form.block_entity_data.value !== ""){
        return `block_entity_data=${form.block_entity_data.value}`;
    } else {
        return "";
    }
}
function set_block_state(form) {
    if(form.block_state && form.block_state.value !== ""){
        return `block_state=${form.block_state.value}`;
    } else {
        return "";
    }
}
function set_blocks_attacks(form) {
    if(form.blocks_attacks && form.blocks_attacks.value !== ""){
        return `blocks_attacks=${form.blocks_attacks.value}`;
    } else {
        return "";
    }
}
function set_break_sound(form) {
    if(form.break_sound && form.break_sound.value !== ""){
        return `block_state=${form.break_sound.value}`;
    } else {
        return "";
    }
}
function set_bucket_entity_data(form) {
    if (form.bucket_entity_data && form.bucket_entity_data.value !== "") {
        return `bucket_entity_data=${form.bucket_entity_data.value}`;
    } else {
        return '';
    }
}
function set_bundle_contents(form) {
    if (form.bundle_contents && form.bundle_contents.value !== "") {
        return `bundle_contents=${form.bundle_contents.value}`;
    } else {
        return '';
    }
}
function set_can_break(form) {
    if (form.can_break && form.can_break.value !== "") {
        return `can_break=${form.can_break.value}`;
    } else {
        return '';
    }
}
function set_can_place_on(form) {
    if (form.can_place_on && form.can_place_on.value !== "") {
        return `can_place_on=${form.can_place_on.value}`;
    } else {
        return '';
    }
}
function set_charged_projectiles(form) {
    if (form.charged_projectiles && form.charged_projectiles.value !== "") {
        return `charged_projectiles=${form.charged_projectiles.value}`;
    } else {
        return '';
    }
}
function set_consumable(form) {
    if (form.consumable && form.consumable.value !== "") {
        return `consumable=${form.consumable.value}`;
    } else {
        return '';
    }
}
function set_container(form) {
    if (form.container && form.container.value !== "") {
        return `container=${form.container.value}`;
    } else {
        return '';
    }
}
function set_container_loot(form) {
    if (form.container_loot && form.container_loot.value !== "") {
        return `container_loot=${form.container_loot.value}`;
    } else {
        return '';
    }
}
function set_custom_data(form) {
    if(form.custom_data && form.custom_data.value !== ""){
        return `custom_data=${form.custom_data.value}`;
    } else {
        return "";
    }
}
function set_custom_model_data(form) {
    if(form.custom_model_data && form.custom_model_data.value !== ""){
        return `custom_model_data=${form.custom_model_data.value}`;
    } else {
        return "";
    }
}
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
function set_damage_resistant(form) {
    if(form.damage_resistant && form.damage_resistant.value !== ""){
        return `damage_resistant=${form.damage_resistant.value}`;
    } else {
        return "";
    }
}
function set_death_protection(form) {
    if(form.death_protection && form.death_protection.value !== ""){
        return `death_protection=${form.death_protection.value}`;
    } else {
        return "";
    }
}
function set_debug_stick_state(form) {
    if (form.debug_stick_state && form.debug_stick_state.value !== "") {
        return `debug_stick_state=${form.debug_stick_state.value}`;
    } else {
        return '';
    }
}
function set_dyed_color(form) {
    if(form.dyed_color_flag.value !== ""){
        return "dyed_color=" + parseInt(form.dyed_color.value.substr(1, 6), 16);
    } else {
        return "";
    }
}
function set_enchantable(form) {
    if(form.enchantable && form.enchantable.value !== ""){
        return `enchantable=${form.enchantable.value}`;
    } else {
        return "";
    }
}
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
function set_entity_data(form) {
    if(form.entity_data && form.entity_data.value !== ""){
        return `entity_data=${form.entity_data.value}`;
    } else {
        return "";
    }
}
function set_equippable(form) {
    if(form.equippable && form.equippable.value !== ""){
        return `equippable=${form.equippable.value}`;
    } else {
        return "";
    }
}
function set_firework_explosion(form) {
    if(form.firework_explosion && form.firework_explosion.value !== ""){
        return `firework_explosion=${form.firework_explosion.value}`;
    } else {
        return "";
    }
}
function set_fireworks(form) {
    if(form.fireworks && form.fireworks.value !== ""){
        return `fireworks=${form.fireworks.value}`;
    } else {
        return "";
    }
}
function set_food(form) {}
function set_glider(form) {}
function set_instrument(form) {}
function set_intangible_projectile(form) {}
function set_item_model(form) {
    if(form.item_model && form.item_model.value !== ""){
        return `item_model=${form.item_model.value}`;
    } else {
        return "";
    }
}
function set_item_name(form) {}
function set_jukebox_playable(form) {}
function set_lock(form) {
    if(form.lock && form.lock.value !== ""){
        return `lock=${form.lock.value}`;
    } else {
        return "";
    }
}
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
function set_map_decorations(form) {
    if(form.map_decorations && form.map_decorations.value !== ""){
        return `map_decorations=${form.map_decorations.value}`;
    } else {
        return "";
    }
}
function set_map_id(form) {
    if(form.map_id && form.map_id.value !== ""){
        return `map_id=${form.map_id.value}`;
    } else {
        return "";
    }
}
function set_max_damage(form) {
    if(form.max_damage && form.max_damage.value !== ""){
        return `max_damage=${form.max_damage.value}`;
    } else {
        return "";
    }
}
function set_max_stack_size(form) {
    if(form.max_stack_size && form.max_stack_size.value !== ""){
        return `max_stack_size=${form.max_stack_size.value}`;
    } else {
        return "";
    }
}
function set_note_block_sound(form) {
    if(form.note_block_sound && form.note_block_sound.value !== ""){
        return `note_block_sound=${form.note_block_sound.value}`;
    } else {
        return "";
    }
}
function set_ominous_bottle_amplifier(form) {
    if (form.ominous_bottle_amplifier && form.ominous_bottle_amplifier.value !== "") {
        return `ominous_bottle_amplifier=${form.ominous_bottle_amplifier.value}`;
    } else {
        return "";
    }
}
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
function set_potion_duration_scale(form) {
    if (form.potion_duration_scale && form.potion_duration_scale.value !== "") {
        return `potion_duration_scale=${form.potion_duration_scale.value}`;
    } else {
        return "";
    }
}
function set_profile(form) {
    if(form.profile && form.profile.value !== ""){
        return `profile=${form.profile.value}`;
    } else {
        return "";
    }
}
function set_provides_banner_patterns(form) {
    if(form.provides_banner_patterns && form.provides_banner_patterns.value !== ""){
        return `provides_banner_patterns=${form.provides_banner_patterns.value}`;
    } else {
        return "";
    }
}
function set_provides_trim_material(form) {
    if(form.provides_trim_material && form.provides_trim_material.value !== ""){
        return `provides_trim_material=${form.provides_trim_material.value}`;
    } else {
        return "";
    }
}
function set_rarity(form) {
    if (form.rarity && form.rarity.value !== "") {
        return `rarity=\"${form.rarity.value}\"`;
    } else {
        return "";
    }
}
function set_recipes(form) {
    if(form.recipes && form.recipes.value !== ""){
        return `recipes=${form.recipes.value}`;
    } else {
        return "";
    }
}
function set_repair_cost(form) {
    if(form.repair_cost && form.repair_cost.value !== ""){
        return `repair_cost=${form.repair_cost.value}`;
    } else {
        return "";
    }
}
function set_repairable(form) {
    if(form.repairable && form.repairable.value !== ""){
        return `repairable=${form.repairable.value}`;
    } else {
        return "";
    }
}
function set_stored_enchantments(form) {}
function set_suspicious_stew_effects(form) {
    if(form.suspicious_stew_effects && form.suspicious_stew_effects.value !== ""){
        return `suspicious_stew_effects=${form.suspicious_stew_effects.value}`;
    } else {
        return "";
    }
}
function set_tool(form) {
    if(form.tool && form.tool.value !== ""){
        return `tool=${form.tool.value}`;
    } else {
        return "";
    }
}
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
function set_tooltip_style(form) {
    if(form.tooltip_style && form.tooltip_style.value !== ""){
        return `tooltip_style=${form.tooltip_style.value}`;
    } else {
        return "";
    }
}
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
function set_use_cooldown(form) {
    if(form.use_cooldown && form.use_cooldown.value !== ""){
        return `use_cooldown=${form.use_cooldown.value}`;
    } else {
        return "";
    }
}
function set_use_remainder(form) {
    if(form.use_remainder && form.use_remainder.value !== ""){
        return `use_remainder=${form.use_remainder.value}`;
    } else {
        return "";
    }
}
function set_weapon(form) {
    if(form.weapon && form.weapon.value !== ""){
        return `weapon=${form.weapon.value}`;
    } else {
        return "";
    }
}
function set_writable_book_content(form) {
    if(form.writable_book_content && form.writable_book_content.value !== ""){
        return `writable_book_content=${form.writable_book_content.value}`;
    } else {
        return "";
    }
}
function set_written_book_content(form) {
    if(form.written_book_content && form.written_book_content.value !== ""){
        return `written_book_content=${form.written_book_content.value}`;
    } else {
        return "";
    }
}
