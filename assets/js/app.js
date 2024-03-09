function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.pacientes = paciente || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return this.nombre
        }
    })

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        }
    })

    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return this.edad
        }
    })

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            this.edad = edad;
        }
    })

    Object.defineProperty(this, "_getRut", {
        get: function () {
            return this.rut
        }
    })

    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            this.rut = rut;
        }
    })

    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return this.diagnostico
        }
    })

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            this.diagnostico = diagnostico;
        }
    })

}

Consultorio.prototype.searchPaciente = function (nombre) {
    if (this.pacientes.find((paciente) => nombre === paciente.nombre)) {
        return this.pacientes.find((paciente) => nombre === paciente.nombre);
    } else {
        return "No existe el paciente buscado";
    }
}

Consultorio.prototype.allPacientes = function () {
    return this.pacientes;
}

const paciente1 = new Paciente();

paciente1._setNombre = "Tom";
paciente1._setEdad = 25;
paciente1._setRut = "12345678-k";
paciente1._setDiagnostico = "Rinitis";

const paciente2 = new Paciente();

paciente2._setNombre = "Joaquin";
paciente2._setEdad = 24;
paciente2._setRut = "98745612";
paciente2._setDiagnostico = "Resfriado";

const consultorio1 = new Consultorio("Clinica Alemana", [paciente1, paciente2])

console.log(paciente1);
console.log(paciente2);
console.log(consultorio1)
console.log(consultorio1.searchPaciente("Tom"));
console.log(consultorio1.searchPaciente("Joaquin"));
console.log(consultorio1.searchPaciente("Maria"));
console.log(consultorio1.searchPaciente("Hola"));
console.log(consultorio1.allPacientes());

