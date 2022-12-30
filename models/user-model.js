const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    // Decidí luego usar el id asignado automáticamente por mongodb
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String,
        default: "None"
    }
});

// Configuración extra. Para fines visuales. No afecta a la base de datos.
UserSchema.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('User', UserSchema);