//META{"name":"LastPlugin"}*//
function LastPlugin(){}
LastPlugin.prototype.load=function(){};LastPlugin.prototype.start=function(){settingsPanel=new SettingsPanel();settingsPanel.init();};LastPlugin.prototype.stop=function(){};LastPlugin.prototype.unload=function(){};LastPlugin.prototype.onSwitch=function(){};LastPlugin.prototype.onMessage=function(){};LastPlugin.prototype.getName=function(){return"Last";};LastPlugin.prototype.getDescription=function(){return"No information given.";};LastPlugin.prototype.getVersion=function(){return"1.0";};LastPlugin.prototype.getAuthor=function(){return"Bluscream";};