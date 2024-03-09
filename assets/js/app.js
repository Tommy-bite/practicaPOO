function Consultorio(nombre, paciente){
    this.nombre = nombre;
    this.paciente = paciente || [];
}

function Paciente(nombre, edad, rut, diagnostico){
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre" , {
        get: function() {
            return this.nombre
        }
    })
    
    Object.defineProperty(this, "_setNombre" , {
        set: function(nombre) {
            this.nombre = nombre;
        }
    })

    Object.defineProperty(this, "_getEdad" , {
        get: function() {
            return this.edad
        }
    })
    
    Object.defineProperty(this, "_setEdad" , {
        set: function(edad) {
            this.edad = edad;
        }
    })

    Object.defineProperty(this, "_getRut" , {
        get: function() {
            return this.rut
        }
    })
    
    Object.defineProperty(this, "_setRut" , {
        set: function(rut) {
            this.rut = rut;
        }
    })

    Object.defineProperty(this, "_getDiagnostico" , {
        get: function() {
            return this.diagnostico
        }
    })
    
    Object.defineProperty(this, "_setDiagnostico" , {
        set: function(diagnostico) {
            this.diagnostico = diagnostico;
        }
    })

}

Paciente.prototype.searchPaciente = function () {
    return `Datos encontrados del paciente ${this.nombre}`
}

Consultorio.prototype.allPacientes = function(){
    return 'Listando a todos los pacientes...';
}

const paciente1 = new Paciente("Tom", 25, "12345678-k", "Rinitis");
const paciente2 = new Paciente("Joaquin", 24, "98745612-1", "Resfriado");

const consultorio1 = new Consultorio("Clinica Alemana", [paciente1._getNombre, paciente2._getNombre])

console.log(paciente1);
console.log(paciente2);
console.log(consultorio1)
console.log(paciente1.searchPaciente(this.nombre));
console.log(paciente2.searchPaciente(this.nombre));
console.log(consultorio1.allPacientes());

