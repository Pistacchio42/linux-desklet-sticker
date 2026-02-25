const Settings = imports.ui.settings;
const Desklet = imports.ui.desklet;
const St = imports.gi.St;
const Clutter = imports.gi.Clutter;
const Gio = imports.gi.Gio;

const UUID = "sticker@Pistacchio42";

let image = GLib.get_user_special_dir

function main(metadata, instanceId) {
  return new MyDesklet(metadata, instanceId);
}

class MyDesklet extends Desklet.Desklet{

    constructor (metadata, instanceId) {

        super(metadata, instanceId);

        this.settings = new Settings.DeskletSettings(this, metadata["uuid"], instanceId);

        this.settings.bindProperty(Settings.BindingDirection.IN, "image", "image", this.on_settings_changed, null);
        this.settings.bindProperty(Settings.BindingDirection.IN, "angle", "angle", this.on_settings_changed, null);
        this.settings.bindProperty(Settings.BindingDirection.IN, "size", "size", this.on_settings_changed, null);

        this.image = this.settings.getValue("image") || this.metadata.path + "/icon.png";
        this.angle = this.settings.getValue("angle") || 0;
        this.size = this.settings.getValue("size") || 1;

        this.setHeader(_("Sticker"));
        this._initUI();
    }

    _initUI(){
        const mainContainer = new St.BoxLayout({ vertical: true });

        const size = this.size;
        const angle = this.angle;
        const finalImagePath = decodeURIComponent(this.image.replace("file://", ""));
        const imageActor = this.createImage(finalImagePath, size, angle);

        mainContainer.add_child(imageActor);
        this.setContent(mainContainer);
    }

    createImage(imagePath, size, angle){

        const canvas = new Clutter.Canvas();

    }

}