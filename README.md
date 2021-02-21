# Custom Npc Scripting With Dbc Mod
* Algumas funções para ajudar com o scripting de Custom Npc 1.7.10 interagindo com o mod Dragon Block C 
* Some functions to help with Custom Npc 1.7.10 scripting interacting with the Dragon Block C mod

### Exemplos

* Interact Hook
```js
  npc.say("Hey " + player.getName() + " sua vida atual é de: " + getDbcHealth(player));
```

* Damaged Hook
```js
if(event.getSource().typeOf(1)){
  npc.say("Hey " + event.getSource().getName() + " sua CON atual é de: " + getDbcAttributes(event.getSource())); 
}
```

* Attack Hook
```js
  if(npc.getAttackTarget().typeOf(1)){
  setDbcAttributes(npc.getAttackTarget().con(20);
  npc.say("Sua nova con é de 20!");
}
```

### Usando juntos

* Interact hook
```js
  setDbcAttributes(player).str(getDbcAttributes(player).str + 5));
```

### Links 

* [Pew's Cavern](https://customnpcscripts.com/pew)
* [CNPC Scripting Support Discord](https://discord.gg/4a24F2z)
* [Forge Methods](https://github.com/KevyPorter/Minecraft-Forge-Utils)
* [CNPC 1.7.10 API](http://www.kodevelopment.nl/customnpcs/api/1.7.10/)
