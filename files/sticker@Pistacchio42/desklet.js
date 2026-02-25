const Settings = imports.ui.settings;

const UUID = "sticker@Pistacchio42";

let image = GLib.get_user_special_dir

function main(metadata, instanceId){
    let myDesklet = new myDesklet(metadata,instanceId);
    return myDesklet;
}

function MyDesklet(metadata, instanceId) {
    this._init(metadata, instanceId);
}

MyDesklet.prototype = {

    _init: function(metadata, instanceId) {
        this.settings = new Settings.DeskletSettings(this, metadata["uuid"], instanceId);

        this.settings.bindProperty(Settings.BindingDirection.IN, "image", "image", this.on_settings_changed, null);
        this.settings.bindProperty(Settings.BindingDirection.IN, "angle", "angle", this.on_settings_changed, null);
        this.settings.bindProperty(Settings.BindingDirection.IN, "size", "size", this.on_settings_changed, null);

        this.image = this.settings.getValue("image") || "files\\sticker@Pistacchio42\\icon.png",
        this.angle = this.settings.getValue("angle") || 0;
        this.size = this.settings.getValue("size") || 1;
    }
}