# コマンド生成ツール

このリポジトリは、Minecraftのコマンド生成を支援するWebツール群です。

## 構成ファイル
- `give-enchant-1.21.5.html` … エンチャント付きアイテムのコマンド生成ツール
- `give-potion-1.21.5.html` … ポーションのコマンド生成ツール
- `common.js` … 共通JavaScript処理
- `formUtils.js` … 各種コンポーネント生成用の共通関数
- `common.css` … 共通スタイルシート

## コンポーネントに関するHTML処理の書き方

### attribute_modifiers
```html
```
### banner_patterns
```html
```
### base_color
```html
```
### bees
```html
```
### block_entity_data
```html
```
### block_state
```html
```
### blocks_attacks
```html
```
### break_sound
```html
```
### bucket_entity_data
```html
```
### bundle_contents
```html
```
### can_break
```html
```
### can_place_on
```html
```
### charged_projectiles
```html
```
### consumable
```html
```
### container
```html
```
### container_loot
```html
```
### custom_data
```html
```
### custom_model_data
```html
```
### custom_name
```html
<tr>
	<th>新しい名前</th>
	<td><input class="command-input" type="text" name="custom_name" value="" placeholder="未設定" onchange="makeCommand()"></td>
</tr>
```

### lore
```html
<tr>
	<th>説明文1</th>
	<td><input class="command-input" type="text" name="lore" value="" placeholder="未設定" onchange="makeCommand()"></td>
</tr>
<tr>
	<th>説明文2</th>
	<td><input class="command-input" type="text" name="lore" value="" placeholder="未設定" onchange="makeCommand()"></td>
</tr>
<tr>
	<th>説明文3</th>
	<td><input class="command-input" type="text" name="lore" value="" placeholder="未設定" onchange="makeCommand()"></td>
</tr>
<tr>
	<th>説明文4</th>
	<td><input class="command-input" type="text" name="lore" value="" placeholder="未設定" onchange="makeCommand()"></td>
</tr>
```

### enchantments
```html
<table class="command-table-horizontal">
	<tr>
		<th style="width:100px;"><strong>エンチャント</strong></th>
		<th style="width:60px;"><strong>レベル</strong></th>
	</tr>
	<tr>
		<td>ダメージ軽減</td>
		<td><input class="command-input" type="number" name="enchantments_levels" value="" maxlength="3" placeholder="未設定" min="0" max="255" title="protection" onchange="makeCommand()"></td>
	</tr>
	<!-- 他のエンチャントも同様に追加 -->
</table>
```

### entity_data
```html
```
### equippable
```html
```
### fireworks
```html
```
### firework_explosion
```html
```
### food
```html
```
### glider
```html
```
### instrument
```html
```
### intangible_projectile
```html
```
### item_model
```html
```
### item_name
```html
```
### jukebox_playable
```html
```
### lock
```html
```
### lodestone_tracker
```html
```
### map_color
```html
```
### map_decorations
```html
```
### map_id
```html
```
### max_damage
```html
```
### max_stack_size
```html
```
### note_block_sound
```html
```
### ominous_bottle_amplifier
```html
```
### pot_decorations
```html
```
### potion_contents
```html
<tr>
	<th>ポーションの種類</th>
	<td>
		<select class="command-input" name="potion" onchange="makeCommand()">
			<option value="">未設定</option>
			<option value="mundane">ありふれたポーション</option>
			<!-- 他のポーションも同様に追加 -->
		</select>
	</td>
</tr>
```

### potion_duration_scale
```html
```
### profile
```html
```
### provides_banner_patterns
```html
```
### provides_trim_material
```html
```
### rarity
```html
```
### recipes
```html
```
### repairable
```html
```
### repair_cost
```html
```
### stored_enchantments
```html
```
### suspicious_stew_effects
```html
```
### tool
```html
```
### tooltip_display
```html
```
### tooltip_style
```html
```
### trim
```html
```
### unbreakable
```html
```
### use_cooldown
```html
```
### use_remainder
```html
```
### weapon
```html
```
### writable_book_content
```html
```
### written_book_content
```html
```



